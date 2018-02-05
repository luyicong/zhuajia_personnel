<template>
  <div class="update-password">
    <group title="修改密码" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="原密码" placeholder="请输入原密码" v-model="oldpwd"></x-input>
      <x-input title="新密码" placeholder="请输入新密码" v-model="newpwd"></x-input>
      <x-input title="确认密码" placeholder="确认密码" v-model="respwd"></x-input>
    </group>
    <box gap="20px 10px">
      <x-button type="primary">保存</x-button>
    </box>
  </div>
</template>
<script>
import { Group , XInput , XButton, Box , CheckIcon} from 'vux'

export default {
  components: {
    Group,XInput,XButton,Box,CheckIcon
  },
  name: "",
  data () {
    return {
      oldpwd:'',
      newpwd:'',
      respwd:''
    }
  }
}
</script>
<style lang="less" scoped>
</style>
