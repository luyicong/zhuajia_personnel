<template>
  <div class="companylist-page-wrap">
    <com-list :data="companyList"></com-list>
  </div>
</template>
<script>
import ComList from '../common/ComList'
import Api from '../../api'
export default {
  components: {
    ComList
  },
  data () {
    return {
      defaultImg:require('@/assets/img/no_photo_male.png'),
      companyList:[{},{},{},{},{},{},{},{}],
    }
  },
  beforeCreate() {
    //do something before creating vue instance
    Api.getCompanyList().then((res)=>{
      console.log(res.data)
      if(res.status == 1){
        this.companyList = res.data.data
      }
    })
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
