<template>
  <div class="create-resume-page">
    <group title="只需30秒填写简历,轻松搞定工作!" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="姓名" placeholder="请输入姓名" v-model="usrResume.name"></x-input>
      <selector title="性别" placeholder="请选择性别" :options="['男', '女']" v-model="usrResume.sex"></selector>
      <datetime title="出生年月" placeholder="请选择出生年月" v-model="usrResume.birthy" value-text-align="left"></datetime>
      <selector title="最高学历" placeholder="请选择最高学历" :options="['中专', '大专' , '本科','硕士','博士','博士后']" v-model="usrResume.edu"></selector>
      <selector title="工作经验" placeholder="请选择工作经验" :options="['不限', '1年以下','1-3年','3-5年','5-10年','10年以上']" v-model="usrResume.workexp"></selector>
      <x-input title="现居住地" placeholder="请填写现居住地" v-model="usrResume.nowaddress"></x-input>
      <x-input title="邮箱" placeholder="请填写邮箱" v-model="usrResume.email"></x-input>
      <x-input title="手机号码" placeholder="请填写手机号码" disabled v-model="usrResume.phone"></x-input>
    </group>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <selector title="目前状态" placeholder="请选择目前状态"
          :options="['目前已离职，可快速上岗', '目前在职，可考虑换新环境','观望有好的机会再考虑','目前暂无跳槽打算','应届毕业生']"
          v-model="usrResume.workstate">
      </selector>
      <selector title="工作性质" placeholder="请选择工作性质" :options="['全职', '兼职','实习']" v-model="usrResume.jobtype"></selector>
      <popup-picker title="期待行业" placeholder="请选择期待行业" :data="list" v-model="usrResume.industry" value-text-align="left" @on-shadow-change="industryChange"></popup-picker>
      <x-input title="期待职位" placeholder="请填写期待职位" v-model="usrResume.position"></x-input>
      <selector title="期待薪资" placeholder="请选择工作经验" :options="['面议', '1.5k-3k/月','2.5k-3.5k/月','3.5k-5k/月','5k-10k/月','10k以上/月']" v-model="usrResume.salary"></selector>
      <x-input title="工作地区" placeholder="请填写现居住地" v-model="usrResume.Workarea"></x-input>
    </group>
    <box gap="20px 10px">
      <x-button type="primary">保存</x-button>
    </box>
  </div>
</template>
<script>
import { GroupTitle, Group, Cell, XInput, Selector, Box,
   PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch , Checker , CheckerItem , XButton} from 'vux'
export default {
  components: {
    GroupTitle,Group,Cell,XInput,Selector,PopupPicker,Datetime,XNumber,ChinaAddressData,XAddress,XTextarea,XSwitch,Checker,CheckerItem,XButton,
    Box
  },
  data () {
    return {
      usrResume:{
        //姓名
        name:'',
        //性别
        sex:'',
        //出生年月
        birthy:'',
        //学历
        edu:'',
        //工作经验
        workexp:'',
        //现居住地
        nowaddress:'',
        //邮箱
        email:'',
        //手机号
        phone:'13838383388',
        //目前状态
        workstate:'',
        //工作性质
        jobtype:'',
        //期望行业
        industry:[],
        //期待职位
        position:'',
        //期待薪资
        salary:'',
        //工作地区
        Workarea:''
      },
      sex:'',
      list: [['设计类', '造价类', '工程咨询类','监理类','施工类','规划类','其他类']],
      industry:[]
    }
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
