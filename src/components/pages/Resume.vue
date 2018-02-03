<template>
  <div class="resume-list-wrap">
    <candidate-list :data="resumeList"></candidate-list>
  </div>
</template>
<script>
import CandidateList from '../common/CandidateList'
export default {
  components: {
    CandidateList
  },
  data () {
    return {
      defaultImg:require('@/assets/img/no_photo_male.png'),
      resumeList:[{},{},{},{},{},{},{},{},{},{},{},{}]
    }
  }
}
</script>
<style scoped>

</style>
