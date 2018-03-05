<template>
  <div class="login-wrap">
    <div class="login-content-wrap">
      <div class="login-title">用户登录</div>
      <div class="login-form-wrap">
        <!-- <group title="用户登录"> -->
          <x-input v-model="user_name" name="user_name" placeholder="手机号/邮箱"></x-input>
          <x-input v-model="password" type="password" name="password" placeholder="密码"></x-input>
        <!-- </group> -->
      </div>
    </div>
    <div style="margin:10px 10px 30px 10px;color:#999">
      <check-icon :value.sync="isAutoLogin">下次自动登录</check-icon>
      <router-link style="float:right;" tag="span" :to="{ path: '/resetPwd'}">忘记密码</router-link>
    </div>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="Login()">登录</x-button>
      <x-button :link="'/register'">立即注册</x-button>
    </box>

    <div class="test_acount">
      <p>测试账号：18376640435</p>
      <p>测试密码：88888888</p>
    </div>
    <toast v-model="isOk" type="success">{{ '恭喜，登录成功' }}</toast>
    <toast v-model="isErr" type="warn">{{ errText }}</toast>
  </div>
</template>
<script>
import { Group , XInput , XButton, Box , CheckIcon , md5 , Toast , cookie } from 'vux'
import Api from '../../api'
import { mapGetters , mapMutations} from 'vuex'
export default {
  components: {
    Group,
    XInput,
    XButton,
    Box,
    CheckIcon,
    Toast
  },
  data: () => ({
    isAutoLogin:true,
    user_name:'18376640435',
    password:'zxc123456',
    isOk:false,
    isErr:false,
    errText:''
  }),
  computed:{
    ...mapGetters({
      userInfo:'getUserInfo'
    })
  },
  created() {
    //do something after creating vue instance
    console.log(md5('zxc123456'))
    if(Boolean(this.userInfo.user_id)){
      this.$router.push({path:'/user'})
    }
  },
  methods: {
    ...mapMutations({
      setUserInfo:'setUserInfo'
    }),
    Login() {
      Api.userLogin({user_name:this.user_name,password:md5(this.password)}).then((res)=>{
        console.log(res)
        if(res.status == 1){
          this.isOk = true
          if(!res.data.id) {
            setTimeout(()=>{
              this.$router.push({path:'/StoreResume',query:{user_id:res.data.user_id}})
            },2000)
            return
          }
          cookie.set('user',JSON.stringify(res.data))
          this.setUserInfo({userInfo:res.data})
          setTimeout(()=>{
            this.$router.push({path:'/user'})
            // history.go(-1)
          },2000)
        }else{
          this.isErr = true
          this.errText = res.message
        }
      })
    }
  }
}
</script>
<style scoped>
.test_acount{
  padding: 20px 10px;
}
.test_acount p{
  height: 40px;
  line-height: 40px;
  color: #666;
}
.login-wrap{
    padding-top: 20px;
}
.login-form-wrap{
    width: 100%;
    overflow: hidden;
}
.login-content-wrap{
    width: 100%;
    overflow: hidden;
    background-color: #fff;
}
.login-content-wrap{
    width: 100%;
    overflow: hidden;
}
.login-title{
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #666;
  border-bottom: 1px solid #ddd;
  /* text-indent: 15px; */
  text-align: center;
}
</style>
