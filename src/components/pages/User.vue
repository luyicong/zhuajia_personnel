<template>
  <div class="user">
    <div class="user-header">
      <div class="user-head-img">
        <img :src="defaultImg" alt="">
      </div>
      <p class="user-name">黄小明</p>
      <p class="user-account">980469887@qq.com</p>
    </div>
    <div class="user-center-nav">
      <!-- <ul>
        <li>投递记录</li>
        <li>我的收藏</li>
        <li>浏览记录</li>
        <li>设置</li>
      </ul> -->
      <group>
        <cell :title="`投递记录`" :link="{path:'/demo'}"></cell>
        <cell :title="`我的收藏`" :link="{path:'/demo'}"></cell>
        <cell :title="`浏览记录`" link="{path:'/demo'}"></cell>
        <cell :title="`设置`" :link="{path:'/demo'}"></cell>
      </group>
    </div>
  </div>
</template>
<script>
import { Group , Cell } from 'vux'
  export default {
    components: {
      Group,
      Cell
    },
    data () {
      return {
        defaultImg:require('@/assets/img/no_photo_male.png'),
      }
    }
  }
</script>
<style scoped>
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
  padding-bottom: 30px;
}
.user-center-nav{
  /* background-color: #fff; */
}
.user-center-nav{
    /* margin-top: 10px; */
}
.user-center-nav .weui-cells,.user-center-nav .vux-no-group-title{
  margin-top: 0;
}
.user-head-img{
  width: 80px;
  height:80px;
  border-radius: 40px;
  overflow: hidden;
  margin:20px auto 10px auto;
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
