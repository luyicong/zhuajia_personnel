<template>
  <div class="login-wrap">
    <div class="login-content-wrap">
      <div class="login-title">用户登录</div>
      <div class="login-form-wrap">
        <!-- <group title="用户登录"> -->
          <x-input name="mobile" placeholder="用户名"></x-input>
          <x-input name="mobile" placeholder="密码"></x-input>
        <!-- </group> -->
      </div>
    </div>
    <div style="margin:10px 10px 30px 10px;color:#999">
      <check-icon :value.sync="isAutoLogin">下次自动登录</check-icon>
      <router-link style="float:right;" tag="span" :to="{ path: '/resetPwd'}">忘记密码</router-link>
    </div>
    <box gap="10px 10px">
      <x-button type="primary">登录</x-button>
      <x-button :link="'/register'">立即注册</x-button>
    </box>
  </div>
</template>
<script>
import { Group , XInput , XButton, Box , CheckIcon} from 'vux'

export default {
  components: {
    Group,
    XInput,
    XButton,
    Box,
    CheckIcon
  },
  data: () => ({
    isAutoLogin:true
  })
}
</script>
<style scoped>
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
