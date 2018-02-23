<template>
  <div class="user-collection-page">
    <ul class="jobs-list" v-if="List.length">
      <router-link tag="li" v-for="(item,index) in List" :key="index" :to="{ name: 'posdetail', params: { id: item.pos_id }}">
        <div class="left-info">
          <p class="job-name">{{item.pos_name}}</p>
          <p>{{item.comp_name}}</p>
          <p class="time">投递日期：{{item.create_time}}</p>
        </div>
        <!-- <div class="right-info">
          <span :class="index>2?'isDelivery':''">{{index>2?'已投递':'未投递'}}</span>
        </div> -->
        <span @click.stop="cancelDelivery(item.delivery_id)" class="cancel-collect-btn"><x-icon type="ios-close-empty" size="30"></x-icon></span>
      </router-link>
    </ul>
    <div class="empty" v-else>
      <p>{{tip}}</p>
    </div>
    <toast v-model="isCancelOk" @on-hide="getDeliveryList()" type="success">{{ tipTip }}</toast>
    <toast v-model="isCancelErr" type="cancel">{{tipTip}}</toast>
  </div>
</template>
<script>
import JobList from '../common/JobList'
import { Toast , cookie } from 'vux'
import Api from '../../api'
import { mapGetters , mapMutations} from 'vuex'
export default {
  components: {
    JobList,
    Toast
  },
  data () {
    return {
        List:[],
        tip:'目前暂投递职位！',
        //取消成功
        isCancelOk:false,
        //操作提示
        tipTip:'',
        //取消失败
        isCancelErr:false
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
      this.getDeliveryList()
    }
  },
  methods: {
    //获取投递列表
    getDeliveryList() {
      Api.getDeliveryList(this.userInfo.user_id).then((res)=>{
        console.log(res.data)
        if(res.status == 1){
          this.List = res.data
        }else{
          this.List = []
        }
      })
    },
    //取消投递
    cancelDelivery(delivery_id) {
      Api.cancelDelivery(delivery_id).then((res)=>{
        if(res.status == 1){
          console.log(res)
          this.isCancelOk = true
        }else{
          this.isCancelErr = true
        }
        this.tipTip = res.message
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
