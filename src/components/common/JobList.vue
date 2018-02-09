<template>
  <div class="jobs-list-wrap">
    <ul class="jobs-list" v-if="data.length">
      <router-link tag="li" v-for="(item,index) in data" :key="item.pos_id" :to="{ name: 'posdetail', params: { id: item.pos_id }}">
        <div class="left-info">
          <p class="job-name">{{item.pos_name}}</p>
          <!-- <p><span class="salary">{{item.pos_salary}}</span><span>{{item.pos_edu}}/{{item.pos_exp}}/{{item.pos_age}}</span></p> -->
          <p><span class="salary">{{item.pos_salary}}</span><span>{{item.pos_edu}}/{{item.pos_exp}}</span></p>
          <p>{{item.comp_name}}</p>
        </div>
        <div class="right-info">
          <p>{{item.sendtime}}</p>
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
  background-color: #fff;
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
