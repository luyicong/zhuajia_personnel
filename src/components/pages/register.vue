<template>
  <div class="register-wrap">
    <div class="login-content-wrap">
      <div class="login-title">用户注册</div>
      <div class="login-form-wrap">
        <!-- <group title="用户登录"> -->
          <x-input  v-model="userInfo.user_name" placeholder="手机号/邮箱"></x-input>
          <x-input type="password" v-model="userInfo.password" placeholder="密码"></x-input>
          <x-input type="password" v-model="repassword" placeholder="确认密码"></x-input>
        <!-- </group> -->
      </div>
    </div>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="regist()">注册</x-button>
      <x-button :link="'/login'">立即登录</x-button>
    </box>
    <toast v-model="isErr" type="warn">{{ errText }}</toast>
    <toast v-model="isOk" type="success">{{ '恭喜，注册成功' }}</toast>
  </div>
</template>
<script>
  import { Group , XInput , XButton, Box , CheckIcon , Toast ,md5} from 'vux'
  import Api from '../../api'
  export default {
    components: {
      Group,
      XInput,
      XButton,
      Box,
      CheckIcon,
      Toast
    },
    data () {
      return {
        userInfo:{
          user_name:'18376640435',
          password:'zxc123456'
        },
        repassword:'zxc123456',
        isErr:false,
        errText:'',
        isOk:false
      }
    },
    methods: {
      regist() {
          // console.log('11111')
          if((/^1[34578]\d{9}$/.test(this.userInfo.user_name)) || (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/).test(this.userInfo.user_name)){
            if(!this.userInfo.password){
              this.isErr = true;
              this.errText = '请输入密码！'
              return false
            }
            if(this.userInfo.password != this.repassword){
              this.isErr = true;
              this.errText = '两次密码不一致！'
              return false
            }
            // alert(this.userInfo)
            this.userInfo.password = md5(this.userInfo.password)
            // return false
            Api.userRegist(this.userInfo).then((res)=>{
              console.log(res)
              if(res.status == 1){
                this.isOk = true
                setTimeout(()=>{
                  this.$router.push({path:'/login',query:{user_id:res.data.user_id}})
                },2000)
              }else{
                this.isErr = true;
                this.errText = res.message
              }
            })
          }else{
            this.isErr = true;
            this.errText = '输入不合法！'
            return false
          }
      }
    }
  }
</script>
<style scoped>
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
