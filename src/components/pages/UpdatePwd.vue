<template>
  <div class="update-password">
    <group title="修改密码" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="原密码" type="password" placeholder="请输入原密码" v-model="oldpwd"></x-input>
      <x-input title="新密码" type="password" placeholder="请输入新密码" v-model="newpwd"></x-input>
      <x-input title="确认密码" type="password" placeholder="确认密码" v-model="respwd"></x-input>
    </group>
    <box gap="20px 10px">
      <x-button type="primary" @click.native="upDatePwd">保存</x-button>
    </box>
    <toast v-model="isOk" type="success">{{ '恭喜，修改成功' }}</toast>
    <toast v-model="isErr" type="warn">{{ errText }}</toast>
  </div>
</template>
<script>
import { Group , XInput , XButton, Box , Toast , CheckIcon , md5} from 'vux'
import Api from '../../api'
import { mapGetters , mapMutations} from 'vuex'
export default {
  components: {
    Group,XInput,XButton,Box,CheckIcon,Toast
  },
  name: "",
  data () {
    return {
      oldpwd:'',
      newpwd:'',
      respwd:'',
      isOk:false,
      isErr:false,
      errText:''
    }
  },
  computed:{
    ...mapGetters({
        userInfo:'getUserInfo'
    })
  },
  methods: {
    upDatePwd() {
      if(this.newpwd != this.respwd){
        this.isErr = true
        this.errText = '两次输入密码不一致'
        return
      }
      let data ={
        user_name:this.userInfo.user_name,
        oldpwd:md5(this.oldpwd),
        password:md5(this.newpwd)
      }
      Api.upDatePwd(data).then((res)=>{
        if(res.status == 1){
          this.isOk = true
          setTimeout(()=>{
            this.$router.push({path:'/user'})
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
<style lang="less" scoped>
</style>
