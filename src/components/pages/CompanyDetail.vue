<template>
    <div class="resume-detail">
      <div class="resume-info-moudle resume-header">
        <div class="header-top-bg">
          <div class="head-img">
            <img :src="defaultImg" alt="">
          </div>
        </div>
        <div class="header-bottom">
          <p><strong>{{companyInfo.comp_name}}</strong></p>
          <p><span>{{companyInfo.comp_type}}</span>|<span>{{companyInfo.comp_scale}}</span>|<span>{{companyInfo.comp_address}}</span></p>
        </div>
      </div>
      <div class="resume-info-moudle job-want">
        <div class="moudle-common-title">
          <!-- <span class="icon"><x-icon type="ios-heart" size="18"></x-icon></span> -->
          公司名片</div>
        <div class="info-moudle-content">
          <p>
            <span lass="key">规模：</span><span class="val">{{companyInfo.comp_scale}}</span>
          </p>
          <p>
            <span lass="key">行业：</span><span class="val">{{companyInfo.comp_industry}}</span>
          </p>
          <p>
            <span lass="key">地址：</span><span class="val">{{companyInfo.comp_address}}</span>
          </p>
        </div>
      </div>
      <div class="resume-info-moudle user-contact">
        <div class="moudle-common-title">公司简介</div>
        <div class="info-moudle-content company-desc">
          {{companyInfo.comp_desc}}
        </div>
      </div>
      <div class="resume-info-moudle user-edu-experience">
        <div class="moudle-common-title">联系方式<span class="edu-num">登录后查看联系方式</span></div>
        <div class="info-moudle-content">
          <div class="info-moudle-item">
            <p>
              <span lass="key">电话：</span><span class="val">{{companyInfo.comp_phone}}</span>
            </p>
            <p>
              <span lass="key">邮箱：</span><span class="val">{{companyInfo.comp_email}}</span>
            <p>
              <span lass="key">地址：</span><span>{{companyInfo.comp_address}}</span>
            </p>
          </div>
        </div>
      </div>
      <!--企业正在招聘职位-->
      <div class="resume-info-moudle user-edu-experience">
        <div class="moudle-common-title">该企业正在招聘职位</div>
        <div class="info-moudle-content">
          <job-list v-if="posList.length" :data="companyInfo.posList" :small_h="'small_h'"></job-list>
          <div v-else class="empty">
            暂无发布有职位
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { Flexbox , FlexboxItem} from 'vux'
import JobList from '../common/JobList'
import { mapGetters , mapMutations} from 'vuex'
import Api from '../../api'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    JobList
  },
  name: "",
  data () {
    return  {
      defaultImg:require('@/assets/img/no_photo_male.png'),
      companyInfo:{},
      posList:[]
      // jobList:[{},{},{},{},{},{},{},{},{},{}]
    }
  },
  computed:{
    ...mapGetters({
        userInfo:'getUserInfo'
    })
  },
  beforeCreate() {
    //do something before creating vue instance
    Api.getCompanyDetailById(this.$route.params.id).then((res)=>{
      // console.log(res.data)
      if(res.status == 1){
        this.companyInfo = res.data
        if(!this.userInfo.user_name){
            this.companyInfo.comp_phone = this.companyInfo.comp_phone.substr(0,3)+"*****"+this.companyInfo.comp_phone.substr(8);
            this.companyInfo.comp_email = this.companyInfo.comp_email.substr(0,3)+"*********";
        }
        this.posList = res.data.posList
      }
    })
  }
}
</script>
<style scoped>
.resume-detail,.resume-info-moudle{
  width: 100%;
  overflow: hidden;
}
.resume-info-moudle{
    margin-bottom: 10px;
    background-color: #fff;
}
.header-top-bg{
   height: 80px;
   position: relative;
   background: -webkit-linear-gradient(90deg, #efcc4c,#ff5716); /* Safari 5.1 - 6.0 */
   background: -o-linear-gradient(90deg, #efcc4c,#ff5716); /* Opera 11.1 - 12.0 */
   background: -moz-linear-gradient(90deg, #efcc4c,#ff5716); /* Firefox 3.6 - 15 */
   background: linear-gradient(90deg, #efcc4c,#ff5716); /* 标准的语法（必须放在最后） */
}
.header-top-bg .head-img{
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  position: absolute;
  left:50%;
  margin-left: -40px;
  top:36px;
}
.header-top-bg .head-img img{
  width: 100%;
  height: 100%;
}
.header-bottom{
  height: 80px;
  padding-top: 46px;
  text-align: center;
}
.header-bottom p{
  height: 26px;
  line-height: 26px;
  font-size: 16px;
  color: #999;
}
.header-bottom p strong{
  color: #333;
}
.header-bottom p span{
  color: #999;
  margin:0 2px;
}
.moudle-common-title{
    width: 100%;
    padding:0 10px;
    box-sizing: border-box;
    height: 46px;
    border-bottom: 1px solid #eee;
    line-height: 46px;
}
.moudle-common-title .edu-num{
  color: #009ee5;
  float: right;
  font-size: 14px;
}
.info-moudle-content{
  width: 100%;
  padding:10px;
  box-sizing: border-box;
}
.info-moudle-content .empty{
  text-align: center;
  line-height: 50px;
  color: #999;
}
.company-desc{
  font-size: 14px;
  color: #666;
  line-height: 30px;
  text-indent:1.5em;
}
.info-moudle-content p{
  color: #999;
  min-height: 32px;
  line-height: 32px;
  font-size: 16px;
}
.info-moudle-content .val{
  color: #666;
}
.info-moudle-content  .nologin-tip{
  color: #009ee5;
}
.moudle-common-title svg{
  fill:#009ee5;
}
.moudle-common-title .icon{
  margin-top: 5px;
  float: left;
  margin-right: 3px;
}
</style>
