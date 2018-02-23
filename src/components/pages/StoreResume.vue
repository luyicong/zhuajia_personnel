<template>
  <div class="create-resume-page">
    <group title="只需30秒填写简历,轻松搞定工作!" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="姓名" placeholder="请输入姓名" v-model="userInfo.realname"></x-input>
      <selector title="性别" placeholder="请选择性别" :options="['男', '女']" v-model="userInfo.sex"></selector>
      <datetime title="出生年月" placeholder="请选择出生年月" v-model="userInfo.birthy" value-text-align="left"></datetime>
      <selector title="最高学历" placeholder="请选择最高学历" :options="['中专', '大专' , '本科','硕士','博士','博士后']" v-model="userInfo.maxedu"></selector>
      <x-input title="工作经验" placeholder="请选择工作经验" v-model="userInfo.workexp"></x-input>
      <x-input title="现居住地" placeholder="请填写现居住地" v-model="userInfo.nowaddress"></x-input>
      <!-- <x-input title="邮箱" placeholder="请填写邮箱" v-model="userInfo.email"></x-input> -->
      <x-input title="手机号码" placeholder="请填写手机号码" disabled v-model="userInfo.phone"></x-input>
    </group>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <selector title="目前状态" placeholder="请选择目前状态"
          :options="['目前已离职，可快速上岗', '目前在职，可考虑换新环境','观望有好的机会再考虑','目前暂无跳槽打算','应届毕业生']"
          v-model="userInfo.workstate">
      </selector>
      <selector title="工作性质" placeholder="请选择工作性质" :options="['全职', '兼职','实习']" v-model="userInfo.jobtype"></selector>
      <selector title="期待行业" placeholder="请选择期待行业" :options="['设计类', '造价类', '工程咨询类','监理类','施工类','规划类','其他类']" v-model="userInfo.industry"></selector>

      <!-- <popup-picker title="期待行业" placeholder="请选择期待行业" :data="list" v-model="userInfo.industry" value-text-align="left" @on-shadow-change="industryChange"></popup-picker> -->
      <x-input title="期待职位" placeholder="请填写期待职位" v-model="userInfo.position"></x-input>
      <x-input title="期待薪资" placeholder="请填写期待薪资" v-model="userInfo.salary"></x-input>
      <x-input title="工作地区" placeholder="请填写现居住地" v-model="userInfo.workarea"></x-input>
    </group>
    <box gap="20px 10px">
      <x-button type="primary" @click.native="upDateResume()">保存</x-button>
    </box>
    <toast v-model="isOk" type="success">{{ '更新成功！' }}</toast>
    <toast v-model="isErr" type="warn">{{ errText }}</toast>
  </div>
</template>
<script>
import { GroupTitle, Group, Cell, XInput, Selector, Box,Toast,cookie,
   PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch , Checker , CheckerItem , XButton} from 'vux'
import Api from '../../api'
import { mapGetters , mapMutations} from 'vuex'

export default {
  components: {
    GroupTitle,Group,Cell,XInput,Selector,PopupPicker,Datetime,XNumber,ChinaAddressData,XAddress,XTextarea,XSwitch,Checker,CheckerItem,XButton,
    Box,Toast
  },
  data () {
    return {
      usrResume:{
        //姓名
        realname:'',
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
        phone:'',
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
      industry:[],
      isOk:false,
      isErr:false,
      errText:''
    }
  },
  computed:{
    ...mapGetters({
        userInfo:'getUserInfo',
    })
  },
  created() {
    //do something after creating vue instance
    // userInfo.industry = userInfo.industry.join('')
    //
    // console.log(userInfo.industry)
  },
  methods: {
    ...mapMutations({
      setUserInfo:'setUserInfo'
    }),
    industryChange(data) {
      console.log(data)
      this.industry = data
    },
    //更新简历
    upDateResume() {
      this.userInfo.user_name = this.userInfo.user_name || ''
      this.userInfo.age = this.userInfo.age || ''
      this.userInfo.birthy = this.userInfo.birthy || ''
      this.userInfo.email = this.userInfo.email || ''
      this.userInfo.industry = this.userInfo.industry || ''
      this.userInfo.jobtype = this.userInfo.jobtype || ''
      this.userInfo.maxedu = this.userInfo.maxedu || ''
      this.userInfo.nowaddress = this.userInfo.nowaddress || ''
      this.userInfo.phone = this.userInfo.phone || ''
      this.userInfo.position = this.userInfo.position || ''
      this.userInfo.realname = this.userInfo.realname || ''
      this.userInfo.salary = this.userInfo.salary || ''
      this.userInfo.sex = this.userInfo.sex || ''
      this.userInfo.user_name = this.userInfo.user_name || ''
      this.userInfo.workarea = this.userInfo.workarea || ''
      this.userInfo.workexp = this.userInfo.workexp || ''
      this.userInfo.workstate = this.userInfo.workstate || ''
      if(this.$route.query.user_id){
        this.userInfo.user_id = this.$route.query.user_id
      }

      Api.upDateResume(this.userInfo).then((res)=>{
        if(res.status == 1){
          this.isOk = true
          cookie.set('user',JSON.stringify(this.userInfo))
          this.setUserInfo({userInfo:this.userInfo})
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
