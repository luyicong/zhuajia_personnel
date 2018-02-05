<template>
  <div class="register-wrap">
    <div class="login-content-wrap">
      <div class="login-title">用户注册</div>
      <div class="login-form-wrap">
        <!-- <group title="用户登录"> -->
          <x-input name="mobile" placeholder="手机号/邮箱"></x-input>
          <x-input name="pwd" placeholder="密码"></x-input>
          <x-input name="repwd" placeholder="确认密码"></x-input>
        <!-- </group> -->
      </div>
    </div>
    <box gap="10px 10px">
      <x-button type="primary">注册</x-button>
      <x-button :link="'/login'">立即登录</x-button>
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
    data () {
      return {

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
