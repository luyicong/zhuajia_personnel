<template>
  <div class="user-info-page">
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="姓名" placeholder="请输入姓名" v-model="userInfo.realname"></x-input>
      <selector title="性别" placeholder="请选择性别" :options="['男', '女']" v-model="userInfo.sex"></selector>
      <datetime title="出生年月" placeholder="请选择出生年月" v-model="userInfo.birthy" value-text-align="left"></datetime>
      <x-input title="现居住地" placeholder="请填写现居住地" v-model="userInfo.nowaddress"></x-input>
    </group>
    <box gap="20px 10px">
      <x-button type="primary">保存</x-button>
    </box>
  </div>
</template>
<script>
import { GroupTitle, Group, XInput, Selector, Box,
   PopupPicker, Datetime, ChinaAddressData , XButton,cookie} from 'vux'
import { mapGetters , mapMutations} from 'vuex'
export default {
  components: {
    GroupTitle,Group,XInput,Selector,PopupPicker,Datetime,ChinaAddressData,XButton,
    Box
  },
  data () {
    return {
      // userInfo:{
      //   //姓名
      //   name:'',
      //   //性别
      //   sex:'',
      //   //出生年月
      //   birthy:'',
      //   //学历
      //   edu:'',
      //   //工作经验
      //   workexp:'',
      //   //现居住地
      //   nowaddress:'',
      //   //邮箱
      //   email:'',
      //   //手机号
      //   phone:'13838383388',
      //   //目前状态
      //   workstate:'',
      //   //工作性质
      //   jobtype:'',
      //   //期望行业
      //   industry:[],
      //   //期待职位
      //   position:'',
      //   //期待薪资
      //   salary:'',
      //   //工作地区
      //   Workarea:''
      // },
      sex:'',
      // list: [['设计类', '造价类', '工程咨询类','监理类','施工类','规划类','其他类']],
      industry:[]
    }
  },
  computed:{
    ...mapGetters({
        userInfo:'getUserInfo',
    })
  },
  created() {
    //do something after creating vue instance
    console.log(this.userInfo.birthy)
  },
  methods: {
    industryChange(data) {
      console.log(data)
      this.industry = data
    }
  }
}
</script>
<style lang="less" scoped>
.create-resume-page{
  width: 100%;
  overflow: hidden;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
</style>
