<template>
  <div class="jobs-list-page">
      <div class="cate" v-if="$route.query.cate_id">
        当前在<em>{{ $route.query.cate_name }}</em>分类下
        <x-icon class="ios-close" type="ios-close" size="22" @click="closeCate()"></x-icon>
      </div>
      <job-list :data="positionList"></job-list>
      <p style="text-align:center;margin-top:50px;" v-if="!positionList.length">
        <inline-loading></inline-loading><span style="vertical-align:middle;display:inline-block;font-size:14px;">&nbsp;&nbsp;加载中</span>
      </p>
      <div v-if="(!positionList.length && isLoad)" class="empty">
        暂无职位数据
      </div>
      <loading-more v-if="(!$route.query.cate_id && positionList.length)" :isLoad="isLoad" :text="text" @loadMore="getList()"></loading-more>
      <toast v-model="isErr" type="text" width="15em" :time="1000" is-show-mask :text="err" :position="'middle'">{{ err }}</toast>
  </div>
</template>
<script>
import JobList from '../common/JobList'
import loadingMore from '../common/loadingMore'
import { Toast , InlineLoading } from 'vux'
import Api from '../../api'
export default {
  components: {
    JobList,
    loadingMore,
    Toast,
    InlineLoading
  },
  data () {
    return {
      positionList:[],
      isLoading:true,
      isLoad:false,
      nowPage:1,
      text:'加载中',
      isErr:false,
      err:'网络出错,稍后重试！',
      mescroll:null
    }
  },
  beforeCreate() {
    Api.getPositionList(this.$route.query.cate_id||'',this.nowPage).then((res)=>{
      if(res.status == 1){
        this.positionList = res.data
      }
      this.isLoading = false
    })
  },
  computed:{
    isShowErrToast() {
      return this.err?true:false
    }
  },
  methods: {
    getList() {
      // this.isLoading = true

      if(this.text != '加载中') {
        return false
      }
      this.isLoad = true
      this.nowPage++
      // console.log(this.nowPage)
      Api.getPositionList(this.$route.query.cate_id||'',this.nowPage).then((res)=>{
        if(res.status == 1){
          setTimeout(()=>{
            if(res.data.length){

              this.positionList = this.positionList.concat(res.data)
            }else{
              this.text = '已全部加载完'
            }
            this.isLoad = false
            this.isLoading = false
          },600)
        }else{
          this.isErr = true
        }
      }).catch((err)=>{
        this.isErr = true
        this.isLoading = false
      })
    },
    //关闭分类
    closeCate() {
      this.$router.push({path:'positionlist'})
      this.positionList = []
      this.isLoading = true
      Api.getPositionList().then((res)=>{
        if(res.status == 1){
          this.positionList = res.data
        }
        this.isLoading = false
      })
    }
  }
}
</script>
<style scoped>
.empty{
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-top: 30px;
    color: #666;
    font-size: 15px;
}
.cate{
    width: 100%;
    height: 36px;
    line-height: 36px;
    background-color: #F7F7FA;
    padding:0 10px;
    font-size: 15px;
    box-sizing: border-box;
    position: relative;
}
.cate em{
  color: #009ee5;
  margin:0 2px;
  font-style: normal;
}
/* .cate span{
  width: 60px;
  float: right;
  text-align: left;
  position: relative;
} */
.cate .ios-close{
  fill:#999;
  position: absolute;
  top: 6px;
  right: 5px;
}

</style>
