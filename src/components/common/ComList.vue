<template>
    <ul class="company-list">
      <router-link tag="li" v-for="(item,index) in data" :key="index" :to="{ path: 'companydetail', params: { id: 123 }}">
        <div class="img"><img :src="defaultImg" alt=""> </div>
        <div class="info">
          <h3>广西裕华建设集团有限公司</h3>
          <span>民营/50人</span><span>招聘职位<i>5</i>个</span>
        </div>
      </router-link>
    </ul>
</template>
<script>
export default {
  props: {
    data:{
      type:Array,
      default:[]
    }
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
.company-list{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.company-list li{
  display: flex;
  border-bottom: 1px dotted #eee;
  padding-bottom: 8px;
  margin-top: 6px;
}
.company-list li .img{
  width: 54px;
  height: 54px;
  background-color: #ddd;
  margin-right: 8px;
}
.company-list .img img{
  width: 100%;
  height: 100%;
}
.company-list .info {
  flex: 1;
}
.company-list .info h3{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #666;
}
.company-list .info span{
  color: #999;
  font-size: 14px;
  margin-right: 6px;
}
.info span i{
  color: #009ee5;
  font-style: normal;
  margin: 0 2px;
}
</style>
