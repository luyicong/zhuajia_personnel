<template>
  <div class="resume-list-wrap">
    <candidate-list :data="resumeList"></candidate-list>
    <loading-more :isLoad="isLoad" :text="text" @loadMore="getList()"></loading-more>
    <toast v-model="isErr" type="text" width="15em" :time="1000" is-show-mask :text="err" :position="'middle'">{{ err }}</toast>
  </div>
</template>
<script>
import CandidateList from '../common/CandidateList'
import loadingMore from '../common/loadingMore'
import { Toast } from 'vux'
import Api from '../../api'
export default {
  components: {
    CandidateList,
    loadingMore,
    Toast
  },
  data () {
    return {
      defaultImg:require('@/assets/img/no_photo_male.png'),
      resumeList:[],
      isLoad:false,
      nowPage:1,
      text:'加载中',
      isErr:false,
      err:'网络出错,稍后重试！'
    }
  },
  beforeCreate() {
    Api.getResumeList().then((res)=>{
      if(res.status == 1){
        this.resumeList = res.data
      }
    })
  },
  methods: {
    getList() {
      if(this.text != '加载中') return false
      this.isLoad = true
      this.nowPage++
      Api.getResumeList(this.nowPage).then((res)=>{
        if(res.status == 1){
          setTimeout(()=>{
            if(res.data.length){
              this.resumeList = this.resumeList.concat(res.data)
            }else{
              this.text = '已全部加载完'
            }
            this.isLoad = false
          },600)
        }else{
          this.isErr = true
        }
      }).catch((err)=>{
          this.isErr = true
      })
    }
  }
}
</script>
<style scoped>

</style>
