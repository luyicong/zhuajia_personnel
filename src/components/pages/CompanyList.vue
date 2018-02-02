<template>
  <div class="companylist-page-wrap">
    <com-list></com-list>
  </div>
</template>
<script>
import ComList from '../common/ComList'
export default {
  components: {
    ComList
  },
  name: "",
  data () {
    return {
      defaultImg:require('@/assets/img/no_photo_male.png')
    }
  }
}
</script>
<style scoped>
.companylist-page-wrap{
  padding:10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
