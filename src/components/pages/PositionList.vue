<template>
  <div class="jobs-list-page">
      <div class="cate">
        当前在<em>建筑设计类</em>分类下
        <x-icon class="ios-close" type="ios-close" size="22"></x-icon>
      </div>
      <job-list :data="jobList"></job-list>
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
      jobList:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    }
  },
  created() {
    //do something after creating vue instance
    console.log('121212')
  },
  methods: {

  }
}
</script>
<style scoped>
.jobs-list-page{
  background-color: #fff;
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
/* .job-list{
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
} */
</style>
