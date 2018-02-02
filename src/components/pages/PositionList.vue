<template>
  <div class="jobs-list-page">
      <ul class="job-list">
        <router-link tag="li" v-for="(item,index) in 15" :key="index" :to="{ path: 'posdetail', params: { id: 123 }}">
          <div class="left-info">
            <p class="job-name">建筑设计师{{index}}</p>
            <p><span>学历不限</span>/<span>1-3年工作经验</span>/年龄不限</p>
            <p>广西某某建筑工程有限公司</p>
          </div>
          <div class="right-info">
            <p class="salary">5k-10k/月</p>
            <p>2017-01-31</p>
            <p>南宁市/青秀区</p>
          </div>
        </router-link>
      </ul>
  </div>
</template>
<script>
import JobList from '../common/JobList'
import { mapState } from 'vuex'
export default {
  components: {
    JobList
  },
  name: "",
  data: () => ({

  }),
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
  },
  methods: {

  }
}
</script>
<style scoped>
.jobs-list-page{
  background-color: #fff;
}
.job-list{
  width: 100%;
  overflow: hidden;
}
.job-list li{
  display: flex;
  padding:10px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  color: #777;
  font-size: 13px;
}
.job-list li p{
  width: 100%;
  height: 26px;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.job-list li .left-info{
  flex: 3;
}
.job-list li .right-info{
  flex: 1;
  text-align: right;
}
.left-info p.job-name{
  color: #333;
  font-size: 16px;
}
.right-info .salary{
  color: #ff552e;
  font-size: 16px;
}
</style>
