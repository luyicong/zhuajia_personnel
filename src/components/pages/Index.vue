<template>
  <div id="index-page">
    <div class="page-content">
      <swiper loop auto :list="bannerList" @on-index-change="onIndexChange"></swiper>
      <!-- <x-header :left-options={showBack:false} :title="'首页'"></x-header> -->
      <!--<position-list :data-list="List"></position-list>-->
      <!--search/start-->
      <div class="index-search">
        <x-icon class="icon-search" type="ios-search" size="22"></x-icon>
        <div class="input-box" @click="openSearchPage()">请输入职位名/公司名/院校名/关键字</div>
      </div>
      <!--search/end-->
      <!--合作人口/start-->
      <div class="cooperation-entry">
        <span>加盟合作</span>
        <span>联系我们</span>
      </div>
      <!--合作人口/end-->
      <!--jobs/start-->
      <div class="common-moudle-wrap">
        <div class="common-moudle-title">职位分类<router-link tag="span" :to="{ path:'catelist'}">全部&nbsp》</router-link></div>
        <div class="common-moudle-list-wrap">
          <flexbox :gutter="0" wrap="wrap" class="cate-list">
                <flexbox-item :span="1/4"><div class="cate-item"><span></span><p>工程咨询类</p></div></flexbox-item>
                <flexbox-item :span="1/4"><div class="cate-item"><span></span><p>工程咨询类</p></div></flexbox-item>
                <flexbox-item :span="1/4"><div class="cate-item"><span></span><p>工程咨询类</p></div></flexbox-item>
                <flexbox-item :span="1/4"><div class="cate-item"><span></span><p>工程咨询类</p></div></flexbox-item>
                <flexbox-item :span="1/4"><div class="cate-item"><span></span><p>工程咨询类</p></div></flexbox-item>
                <flexbox-item :span="1/4"><div class="cate-item"><span></span><p>工程咨询类</p></div></flexbox-item>
                <flexbox-item :span="1/4"><div class="cate-item"><span></span><p>工程咨询类</p></div></flexbox-item>
                <flexbox-item :span="1/4"><div class="cate-item"><span></span><p>工程咨询类</p></div></flexbox-item>
          </flexbox>
        </div>
        <div class="opt-btn">
            <div class="btn">
                <img :src="require('../../assets/img/reload-icon.png')" width="18" height="18" alt="">
                <span>换一批</span>
            </div>
        </div>
      </div>
      <!--jobs/end-->
      <!--company/start-->
      <div class="common-moudle-wrap">
        <div class="common-moudle-title">建筑名企<router-link tag="span" :to="{ path:'companylist'}">全部&nbsp》</router-link></div>
        <div class="common-moudle-list-wrap">
          <com-list :data="companyList"></com-list>
        </div>
        <!-- <div class="opt-btn">
            <div class="btn">
                <img :src="require('../../assets/img/reload-icon.png')" width="18" height="18" alt="">
                <span>换一批</span>
            </div>
        </div> -->
      </div>
      <!--company/end-->
      <!--qiuzhi/start-->
      <div class="common-moudle-wrap">
        <div class="common-moudle-title">建筑求职信息<router-link tag="span" :to="{ path:'resume'}">全部&nbsp》</router-link></div>
        <div class="common-moudle-list-wrap" style="padding:0">
          <ul class="candidate-list">
            <router-link tag="li" v-for="(item,index) in 4" :key="index" :to="{ path: 'resumedetail', params: { id: 123 }}">
              <div class="user-info">
                <div class="head-img">
                  <img :src="defaultImg" alt="">
                </div>
                <div class="desc">
                  <p class="user-name">黄小明</p>
                  <p>男|本科|不限</p>
                  <p class="creat-time">2017.0130</p>
                </div>
              </div>
              <div class="job-info">
                <div class="job-want">求职意向：设计助理</div>
                <div class="job-opt">
                  <p><span href="javascript:;">收藏</span></p>
                  <p><span href="javascript:;">查看</span></p>
                </div>
              </div>
            </router-link>
          </ul>
        </div>
        <!-- <div class="opt-btn">
            <div class="btn">
                <img :src="require('../../assets/img/reload-icon.png')" width="18" height="18" alt="">
                <span>换一批</span>
            </div>
        </div> -->
      </div>
      <!--qiuzhi/end-->

      <!--hots-jobs/start-->
      <div class="common-moudle-wrap">
        <div class="common-moudle-title">建筑招聘信息<router-link tag="span" :to="{ path:'positionlist'}">全部&nbsp》</router-link></div>
        <div class="common-moudle-list-wrap" style="padding:0">
          <job-list :data="jobList"></job-list>
        </div>
      </div>
      <!--hots-jobs/end-->
    </div>
    <div class="footer">
      页面底部
    </div>
  </div>
</template>

<script>
import { Swiper , Flexbox , FlexboxItem} from 'vux'
import ComList from '../common/ComList'
import JobList from '../common/JobList'
import Api from '../../api'
import { mapGetters , mapMutations} from 'vuex'
export default {
  components:{
    Swiper,
    Flexbox,
    FlexboxItem,
    JobList,
    ComList
  },
  name: 'index',
  data () {
    return {
      defaultImg:require('@/assets/img/no_photo_male.png'),
      _index:0,
      jobList:[{},{},{},{},{},{},{},{},{},{}],
      companyList:[{},{},{},{}],
      bannerList:[
        {
          url: 'www.baidu.com',
          img: 'https://static.vux.li/demo/1.jpg',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }
      ],
      loadMoreText:'加载更多',
      defaultImg:require('@/assets/img/no_photo_male.png')
    }
  },
  beforeCreate() {
    //do something before creating vue instance
    // Api.getIndexPositionList(this.pageNo,20).then((res)=>{
    //   this.List = res.content.data.page.result
    // })
  },
  methods: {
    // ...mapMutations({updateLoading:'UPDATE_LOADING'}),
    onIndexChange(index) {
      // console.log(index)
    },
    //获取企业列表
    getList() {
      Api.getIndexPositionList(this.pageNo,20).then((res)=>{
        this.List = this.List.concat(res.content.data.page.result)
        this.updateLoading({isLoading: false})
      })
    },
    loadMore() {
      // this.store.vux.commit('updateLoadingStatus', {isLoading: true})
      this.updateLoading({isLoading: true})
      this.pageNo++
    },
    openSearchPage() {
      this.$router.push('/search')
    }
  },
  watch:{
    pageNo:'getList'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slide-enter-active, .slide-leave-active{
    transition: all 0.3s
}

.slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0)
}
#index-page{
  min-height: 100%;
  /*margin-top: -46px;*/
  display: flex;
  flex-direction: column;
}
.page-content{
  flex: 1;
}
.index-search{
  width: 100%;
  height: 60px;
  padding:12px 15px;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #f0f2f5;
  z-index: 50;
}
.icon-search{
  position: absolute;
  left:20px;
  top: 20px;
  fill: #999;
}
.input-box{
  width: 100%;
  height: 100%;
  background-color: #eee;
  border-radius: 6px;
  color: #999;
  font-size: 14px;
  line-height: 38px;
  text-indent: 28px;
}
.cooperation-entry{
    width: 100%;
    overflow: hidden;
    margin-top: 10px;

}
.cooperation-entry span{
  display: block;
  width: 50%;
  float: left;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  /*border-right: 1px solid #eee;*/
  box-sizing: border-box;
  color: #fff;

}
.cooperation-entry span:first-child{
  background-color: #009ee5;
}
.cooperation-entry span:last-child{
  background-color: #fcb722;
}
.common-moudle-wrap{
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    margin-top: 10px;
}
.common-moudle-title{
  width: 100%;
  height: 40px;
  line-height: 41px;
  padding:0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
.common-moudle-title span{
  float: right;
  line-height: 41px;
  vertical-align: middle;
  color: #999;
}
.common-moudle-title:before{
  content: '';
  display: block;
  float: left;
  height:22px;
  margin-top: 9px;
  margin-right: 6px;
  width: 8px;
  background-color: #fcb722;
}
.common-moudle-list-wrap{
  padding:10px;
  width: 100%;
  box-sizing: border-box;
  min-height: 160px;
}
.cate-list{

}
.cate-list .cate-item{
  text-align: center;
  margin-bottom: 10px;
}
.cate-list .cate-item span{
  display: inline-block;
  width: 52px;
  height: 52px;
  background-color: #ddd;
  border-radius: 26px;
  overflow: hidden;
}
.cate-list .cate-item p{
  font-size: 14px;
}

.candidate-list{
  width: 100%;
  overflow: hidden;
}
.candidate-list li{
  width: 50%;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  box-sizing: border-box;
  float: left;
  list-style: none;
  /*margin-bottom: 10px;*/
  padding: 10px;
  position: relative;
  z-index: 50;
}
.candidate-list li:nth-child(even)::after{
  background-color: #fff;
}
/* .candidate-list li::after{
  content: '';
  height: 100%;
  width: 1px;
  background-color: #eee;
  position: absolute;
  top: 0;
  right: 10px;
} */
.candidate-list .user-info{
  width: 100%;
  /*height: 50px;*/
  display: flex;
}
.candidate-list .user-info .head-img{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  background-color: #eee;
  margin-right: 8px;
  margin-top: 12px;
}
.user-info .head-img img{
  width: 100%;
  height: 100%;
}
.candidate-list .user-info .desc{
  flex: 1;
}
.user-info .desc p{
  font-size: 14px;
  color: #999;
}
.user-info .desc .user-name{
  color: #333;
}
.candidate-list .job-info{
  width: 100%;
}
.job-info .job-want{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding-bottom: 6px;
}
.job-info .job-opt{
  width: 100%;
  overflow: hidden;
}
.job-info .job-opt p{
  display: block;
  width: 50%;
  height: 30px;
  float: left;
  position: relative;
  float: left;
}
.job-opt p span{
  display:inline;
  width: 56px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #009ee5;
  border-radius: 14px;
  float: left;
  font-size: 13px;
  text-align: center;
  /*margin:0 auto;*/
  color: #333;
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  margin:auto;
}
.job-info .job-opt p:first-child span{
  color: #fff;
  background-color: #009ee5;
}
.job-info .job-opt p:last-child span{
  color: #009ee5;
}
.opt-btn{
  width:100%;
  padding:5px 0;
  text-align: center;
  height: 36px;
  line-height: 36px;
  border-top: 1px solid #eee;
}
.opt-btn .btn{
  width: 120px;
  margin:0 auto;
}
.opt-btn img{
  display: inline-block;
  vertical-align: middle;
}
.opt-btn span{
  vertical-align: middle;
}
.footer{
  height: 60px;
  /*padding-bottom: 50px;*/
  /*background: #ddd;*/
  text-align: center;
  line-height: 60px;
}
.page-content{

}
</style>
