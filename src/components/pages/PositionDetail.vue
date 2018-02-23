<template>
    <div id="position-detail">
      <div class="position-info detail-moudle-item">
        <div class="info-item position-name">
          <h3>{{detailInfo.pos_name}}</h3>
          <!-- <router-link tag="span" v-if="Boolean(userInfo.user_id)" :to="{ path: '/login'}">
            <x-icon type="ios-star-outline" size="18"></x-icon>收藏</router-link> -->
          <span class="is-collect" v-if="isCollect">
            <x-icon type="ios-star" size="18"></x-icon>
            已收藏
          </span>
          <span v-else @click="collect(detailInfo.pos_id)">
            <x-icon type="ios-star-outline" size="18"></x-icon>
            收藏
          </span>
        </div>
        <div class="info-item desc">
          <flexbox :gutter="0" wrap="wrap" class="cate-list">
                <flexbox-item :span="1/3"><p><span class="key">薪资：</span><span class="salary">{{detailInfo.pos_salary}}</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">地点：</span><span>{{detailInfo.work_address}}</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">性别：</span><span>{{detailInfo.pos_sex}}</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">学历：</span><span>{{detailInfo.pos_edu}}</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">性质：</span><span>{{detailInfo.pos_type}}</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">经验：</span><span>{{detailInfo.pos_exp}}</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">年龄：</span><span>{{detailInfo.pos_age}}</span></p></flexbox-item>
          </flexbox>
          <p style="color:#999;">更新于：{{detailInfo.sendtime}}</p>
        </div>
      </div>
      <router-link tag="div" class="company-info detail-moudle-item" :to="{ name: 'CompanyDetail', params: { id: detailInfo.comp_id }}">
        <div class="company-img">
          <img :src="defaultImg" alt="" width="60" height="60">
        </div>
        <div class="company-desc">
          <h3>{{ detailInfo.comp_name }}</h3>
          <p>
            <span>{{ detailInfo.comp_scale }}</span>
            <span>{{ detailInfo.comp_type }}</span>
          </p>
          <p class="desc-text">{{detailInfo.comp_desc}}</p>
        </div>
        <p class="right-icon" ><x-icon type="ios-arrow-right" size="20"></x-icon></p>
      </router-link>
      <div class="position-requirement detail-moudle-item">
        <div class="moudle-item-title"><h3>职位描述</h3></div>
        <div class="pos-requirement-desc" v-html="detailInfo.pos_desc"></div>
      </div>
      <div class="company-contact detail-moudle-item">
        <div class="moudle-item-title"><h3>联系方式</h3></div>
        <div class="company-contact-content">
          <p>{{ detailInfo.comp_phone }}</p>
          <p class="email">{{ detailInfo.comp_email }}</p>
          <p>{{ detailInfo.comp_address }}</p>
        </div>
        <div class="safe-tip">
          面试过程中，遇到用人单位收取费用请提高警惕
        </div>
      </div>
      <div v-if="isLoad" class="detail-moudle-item btn">
        <x-button v-if="isDelivery" disabled>已投递</x-button>
        <x-button v-else @click.native="deliveryPos()" type="primary">立即投递</x-button>
      </div>
      <div v-transfer-dom>
        <confirm v-model="confirmIsShow"
        :title="'温馨提示'"
        @on-cancel="onCancel"
        @on-confirm="onConfirm"
        @on-show="onShow"
        @on-hide="onHide">
          <p style="text-align:center;">还没登录，请先登录</p>
        </confirm>
      </div>
      <toast v-model="collectOk" type="text">{{tipText}}</toast>
    </div>
</template>
<script>
import { Flexbox , FlexboxItem , XButton , Confirm , TransferDomDirective as TransferDom , Toast } from 'vux'

import { mapGetters , mapMutations} from 'vuex'

import Api from '../../api'

export default {
  directives: {
    TransferDom
  },
  components: {
    Flexbox,
    FlexboxItem,
    XButton,
    Confirm,
    Toast
  },
  data () {
    return  {
      //是否已经加载完详情数据‘
      isLoad:false,

      defaultImg:require('@/assets/img/no_photo_male.png'),

      detailInfo:{},

      confirmIsShow:false,
      //收藏成功
      collectOk:false,
      //操作提示文本
      tipText:'',
      //是否已经收藏
      isCollect:false,
      //职位是否已投递
      isDelivery:false
    }
  },
  computed:{
    ...mapGetters({
        userInfo:'getUserInfo'
    })
  },
  beforeCreate() {
    console.log(this.$route.params.id)
    //do something before creating vue instance
    Api.getPosDetailById(this.$route.params.id).then((res)=>{
      if(res.status == 1){
        this.detailInfo = res.data
        this.isLoad = true
        console.log(res.data)
      }
    })
  },
  created() {
    //do something after creating vue instance
    if(Boolean(this.userInfo.user_id)){
      Api.checkCollect(this.userInfo.user_id,this.$route.params.id).then((res)=>{
        if(res.status == 1){
          this.isCollect = true
        }else{
          this.isCollect = false
        }
      })
      Api.checkDelivery(this.userInfo.user_id,this.$route.params.id).then((res)=>{
        if(res.status == 1){
          this.isDelivery = true
          console.log(this.isDelivery)
          console.log('5656565656')
        }else{
          this.isDelivery = false
        }
      })
    }
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm')
      this.$router.push({path:'/login'})
    },
    onShow () {
      console.log('onShow')
    },
    onHide () {
      console.log('onHide')
    },
    //申请职位
    deliveryPos () {
      if(!Boolean(this.userInfo.user_id)){
        this.confirmIsShow = true
      }else{
        Api.deliveryPosition(this.userInfo.user_id,this.detailInfo.pos_id).then((res)=>{
          if(res.status == 1){
            this.collectOk = true
            this.isDelivery = true
            this.tipText = res.message
          }else{
            this.tipText = res.message
          }
        })
      }

    },
    //收藏职位
    collect(pos_id) {
      //用户未登录
      if(!Boolean(this.userInfo.user_id)){
        this.confirmIsShow = true
      }else{
        Api.collectPos(this.userInfo.user_id,this.$route.params.id).then((res)=>{
          if(res.status == 1){
            this.collectOk = true
            this.isCollect = true
            this.tipText = res.message
          }else{
            this.tipText = res.message
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.detail-content{
  /* margin-top: 46px; */
}
.slide-enter-active, .slide-leave-active{
    transition: all 0.3s
}
.slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0)
}
.detail-moudle-item{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 10px;
}
.update-time{
  font-size: 14px;
  height: 26px;
  line-height: 26px;
  padding:0 10px;
  color: #999;
}
.info-item{
  border-bottom: 1px solid #eee;
  padding:0 10px;
}
.position-name{
  height: 40px;
  line-height: 40px;
}
.position-name h3{
  font-size: 16px;
  color: #333;
  float: left;
  width: 70%;
}
.position-name span{
  float: right;
  line-height: 40px;
  font-size: 14px;
  color: #999;
}
.position-name span svg{
  float: left;
  margin-top: 11px;
  margin-right: 3px;
  fill:#999;
}
.position-name .is-collect{
  color: #009ee5;
}
.position-name .is-collect svg{
  fill:#009ee5;
}
.position-info .desc{
  width: 100%;
  overflow: hidden;
  padding:10px;
}
.position-info .desc p{
  height: 32px;
  line-height: 32px;
  color: #666;
  font-size: 14px;
}
.desc p .salary{
  color: #ff552e;
  font-weight: 600;
  font-size: 14px;
}
.company-info{
  padding:10px;
  display: flex;
  box-sizing: border-box;
  position: relative;
}
.company-info .company-img{
  width: 60px;
  height: 60px;
  overflow: hidden;
  float: left;
  margin:5px 10px 5px 0;
}
.company-info .company-desc{
  flex: 1;
}
.company-desc{
  font-size: 14px;
}
.company-desc h3{
  font-size: 16px;
  height: 26px;
  line-height: 26px;
  overflow: hidden;
  color: #333;
}
.company-desc p{
  color: #999;
}
.company-desc p.desc-text{
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
}
.company-info .right-icon{
  position: absolute;
  top: 15px;
  right: 5px;
  line-height: 70px;
}
.company-info .right-icon svg{
  fill:#999;
}
.position-requirement{

}
.moudle-item-title{
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #eee;
}
.moudle-item-title h3{
    font-size: 16px;
    margin-left: 10px;
    float: left;
}
.pos-requirement-desc{
    padding:10px;
    font-size: 14px;
    color: #999;
    line-height: 26px;
}
.company-contact-content{
  padding:10px;
}
.company-contact-content p{
  height: 36px;
  color: #666;
  line-height: 36px;
  text-indent: 24px;
}
.company-contact-content p:first-child{
  background: url(../../assets/img/phone.png) no-repeat 0 center;
  background-size: 20px 20px;
}
.company-contact-content p.email{
  background: url(../../assets/img/email.png) no-repeat 0 center;
  background-size: 20px 20px;
}
.company-contact-content p:last-child{
  background: url(../../assets/img/address.png) no-repeat 0 center;
  background-size: 20px 20px;
}
.safe-tip{
    width: 88%;
    height: 30px;
    line-height: 30px;
    background-color: #FFFFE9;
    margin:10px auto;
    font-size: 14px;
    text-align: center;
    border:1px solid #F3EAC3;
    border-radius: 4px;
    color: #009ee5;
}
.btn{
  padding:15px 10px;
  box-sizing: border-box;
  background: none;
}
</style>
