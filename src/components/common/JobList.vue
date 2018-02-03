<template>
  <div class="jobs-list-wrap">
    <ul class="jobs-list">
      <router-link tag="li" v-for="(item,index) in data" :key="index" :to="{ path: 'posdetail', params: { id: 123 }}">
        <div class="left-info">
          <p class="job-name">建筑设计师{{index}}</p>
          <p><span class="salary">7k-10k/月</span><span>学历不限/1-3年/年龄不限</span></p>
          <p>广西一棵树装饰工程有限责任公司</p>
        </div>
        <div class="right-info">
          <p>19小时前</p>
          <span>立即申请</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: arr => []
    }
  },
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
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

.right-info p{
  height: 40px;
  color: #ff552e;
}
.right-info span{
  display: inline-block;
  padding:0 10px;
  text-align: center;
  border-radius: 14px;
  font-size: 12px;
  border: 2px solid #ff552e;
  color: #ff552e;
  /* float: left; */
}
</style>
