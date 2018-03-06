<template>
  <div class="user-collection-page">
    <ul class="jobs-list" v-if="List.length">
      <router-link tag="li" v-for="(item,index) in List" :key="index" :to="{ name: 'posdetail', params: { id: item.pos_id }}">
        <div class="left-info">
          <p class="job-name">{{item.pos_name}}</p>
          <p>{{item.comp_name}}</p>
          <p class="time">收藏日期：{{item.create_time}}</p>
        </div>
        <!-- <div class="right-info">
          <span :class="index>2?'isDelivery':''">{{index>2?'已投递':'未投递'}}</span>
        </div> -->
        <span @click.stop="cancelCollect(item.collect_id)" class="cancel-collect-btn"><x-icon type="ios-close-empty" size="30"></x-icon></span>
      </router-link>
    </ul>
    <p style="text-align:center;margin-top:50px;" v-if="(!List.length && !isLoad)">
      <inline-loading></inline-loading><span style="vertical-align:middle;display:inline-block;font-size:14px;">&nbsp;&nbsp;加载中</span>
    </p>
    <div class="empty" v-if="(!List.length && isLoad)">
      <p>{{tip}}</p>
    </div>
    <toast v-model="isCancelOk" @on-hide="getCollectList()" type="success">{{ '恭喜，取消成功' }}</toast>
  </div>
</template>
<script>
import JobList from '../common/JobList'
import { Toast , cookie ,InlineLoading} from 'vux'
import Api from '../../api'
import { mapGetters , mapMutations} from 'vuex'
export default {
  components: {
    JobList,
    Toast,
    InlineLoading
  },
  data () {
    return {
        List:[],
        //是否已经加载完成
        isLoad:false,
        tip:'目前暂无收藏数据！',
        isCancelOk:false
    }
  },
  computed:{
    ...mapGetters({
        userInfo:'getUserInfo'
    })
  },
  created() {
    //do something after creating vue instance
    if(!Boolean(this.userInfo.user_id)){
      this.List = []
    }else{
      this.getCollectList()
    }
  },
  methods: {
    //获取收藏列表
    getCollectList() {
      Api.getCollectList(this.userInfo.user_id).then((res)=>{
        console.log(res.data)
        if(res.status == 1){
          this.List = res.data
        }else{
          this.List = []
        }
        this.isLoad = true
      })
    },
    cancelCollect(collect_id) {
      Api.cancelCollect(collect_id).then((res)=>{
        if(res.status == 1){
          console.log(res)
          this.isCancelOk = true
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.user-collection-page{
  width: 100%;
  // background:#fff;
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
  position: relative;
  background:#fff;
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

.cancel-collect-btn{
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  padding:10px;
}
.empty{
  padding:10px 0;
  text-align: center;
  // background-color: #f0f2f5;
  color: #666;
}
</style>
