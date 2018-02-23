<template>
  <div class="user">
    <div class="user-header">
      <div class="user-head-img">
        <img :src="defaultImg" alt="">
      </div>
      <p class="user-name">{{ userInfo.realname || '暂未填写' }}</p>
      <p class="user-account">{{ userInfo.user_name }}</p>
    </div>
    <div class="user-center-nav">
      <!-- <ul>
        <li>投递记录</li>
        <li>我的收藏</li>
        <li>浏览记录</li>
        <li>设置</li>
      </ul> -->
      <div class="tip">
        <p></p>
      </div>
      <group :title="resumeTipText">
        <cell :title="`我的简历`" :link="{path:'/storeresume'}"></cell>
        <cell :title="`投递记录`" :link="{path:'/deliverylist'}"></cell>
        <cell :title="`我的收藏`" :link="{path:'/collectionpage'}"></cell>
        <!-- <cell :title="`浏览记录`" :link="{path:'/demo'}"></cell> -->
        <cell :title="`修改密码`" :link="{path:'/updatepwd'}"></cell>
        <!--<cell :title="`个人资料`" :link="{path:'/userinfo'}"></cell>-->
      </group>
      <box gap="20px 10px">
        <x-button type="warn" @click.native="exitFn()">退出登录</x-button>
      </box>
    </div>
  </div>
</template>
<script>
import { Group , Cell , XButton, Box,cookie} from 'vux'
import { mapGetters , mapMutations} from 'vuex'
  export default {
    components: {
      Group,
      Cell,
      XButton,
      Box
    },
    data () {
      return {
        defaultImg:require('@/assets/img/no_photo_male.png'),
        // userInfo:{}
        resumeTipText:''
      }
    },
    computed:{
      ...mapGetters({
          userInfo:'getUserInfo'
      })
    },
    created() {
      console.log(this.userInfo)
        if(!Boolean(this.userInfo.user_id)){
          this.$router.push({path:'/'})
        }
        if(!this.userInfo.position || !this.userInfo.sex || !this.userInfo.realname || !this.userInfo.position){
          this.resumeTipText = '你的简历还没完善，否则不能展示你的求职信息哦'
        }

      //do something after creating vue instance
      // console.log(JSON.parse(cookie.get('user')))
      // this.userInfo = JSON.parse(cookie.get('user'))
    },
    methods: {
      ...mapMutations(['logout']),
      //退出登录
      exitFn() {
        this.logout({userInfo:{}})
        this.$router.push({path:'/'})
      }
    }
  }
</script>
<style lang="less" scoped>
.user,.user-header,.user-center-nav{
  width: 100%;
  overflow: hidden;
  float: left;
}
.user-header{
  /* background-color: #fcb722; */
  /* border-top: 1px solid #ddd; */
  background: -webkit-linear-gradient(210deg, #efcc4c,#ff5716); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(210deg, #efcc4c,#ff5716); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(210deg, #efcc4c,#ff5716); /* Firefox 3.6 - 15 */
  background: linear-gradient(210deg, #efcc4c,#ff5716); /* 标准的语法（必须放在最后） */
  padding-bottom: 20px;
}
.user-center-nav{
  /* background-color: #fff; */
}
.user-center-nav .weui-cells{
    /* margin-top: 10px; */
    font-size:15px;
}
.user-center-nav .weui-cells,.user-center-nav .vux-no-group-title{
  margin-top: 0;
}
.user-head-img{
  width: 80px;
  height:80px;
  border-radius: 40px;
  overflow: hidden;
  margin:15px auto 10px auto;
}
.user-head-img img{
  width: 100%;
  height: 100%;
}
.user-header p{
  text-align: center;
  color: #fff;
}
</style>
