<template>
  <div class="resume-list-wrap">
    <candidate-list :data="resumeList"></candidate-list>
  </div>
</template>
<script>
import CandidateList from '../common/CandidateList'
import Api from '../../api'
export default {
  components: {
    CandidateList
  },
  data () {
    return {
      defaultImg:require('@/assets/img/no_photo_male.png'),
      resumeList:[]
    }
  },
  beforeCreate() {
    //do something before creating vue instance
    Api.getResumeList().then((res)=>{
      console.log(res.data)
      if(res.status == 1){
        this.resumeList = res.data
      }
    })
  }
}
</script>
<style scoped>

</style>
