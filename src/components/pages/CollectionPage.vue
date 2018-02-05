<template>
  <div class="user-collection-page">
    <ul class="jobs-list">
      <router-link tag="li" v-for="(item,index) in 5" :key="index" :to="{ path: 'posdetail', params: { id: 123 }}">
        <div class="left-info">
          <p class="job-name">建筑设计师{{index}}</p>
          <p>广西一棵树装饰工程有限责任公司</p>
          <p class="time">收藏日期：2018.02.05</p>
        </div>
        <div class="right-info">
          <span :class="index>2?'isDelivery':''">{{index>2?'已投递':'未投递'}}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import JobList from '../common/JobList'
export default {
  components: {
    JobList
  },
  data () {
    return {
        List:[{},{}]
    }
  }
}
</script>
<style lang="less" scoped>
.user-collection-page{
  width: 100%;
  background:#fff;
}
.jobs-list{
  width: 100%;
  overflow: hidden;
}
.jobs-list li{
  display: flex;
  height: 82px;
  padding:10px;
  border-bottom: 1px solid #eee;
}
.jobs-list .left-info{
  flex: 3;
}
.jobs-list .right-info{
  flex: 1;
  font-size: 14px;
  text-align: center;
}

.left-info p{
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
}

.left-info .salary{
  color: #ff552e;
  margin-right: 6px;
}
.left-info .job-name{
  color: #333;
}
.right-info span{
  color: #009ee5;
}
.right-info .isDelivery{
  color: red;
}
</style>
