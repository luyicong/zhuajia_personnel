<template>
  <div class="resume-list-components-wrap">
    <div class="resume-list">
      <router-link tag="div"  class="list-item" v-for="(item,index) in data" :key="item.id" :to="{ name: 'ResumeDetail', params: { id: item.id }}">
        <div class="item-top">
          <div class="top-left">
            <div class="left-img">
              <img :src="defaultImg" alt="">
            </div>
            <div class="left-info">
              <p class="user-name">{{item.realname}}</p>
              <p>
                <span>{{item.sex || '暂无'}}</span>|<span>{{item.maxedu || '暂无'}}</span>|<span>{{item.workexp || '暂无'}}</span>
              </p>
              <p>意向地区：{{item.workarea || '暂无'}}</p>
            </div>
          </div>
          <div class="top-right">
            <p>{{ item.update_time }}</p>
          </div>
        </div>
        <div class="item-bottom">
          意向职位：{{item.position}}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {
      defaultImg:require('@/assets/img/no_photo_male.png')
    }
  }
}
</script>
<style scoped>
.resume-list-wrap{
    width: 100%;
    overflow: hidden;
}
.resume-list{
  width: 100%;
  height: 100%;
}
.list-item{
  width: 100%;
  overflow: hidden;
  padding:10px 10px 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  /* border-bottom: 1px solid #eee; */
  margin-bottom: 10px;
  font-size: 14px;
}
.item-top{
  width: 100%;
  height: 64px;
  overflow: hidden;
  display: flex;
}
.top-left{
  flex: 3;
  display: flex;
}
.top-right{
  flex: 1;
  text-align: right;
  color: #fcb722;
}
.top-left p{
  height: 20px;
  line-height: 20px;
  color: #666;
}
.top-left p.user-name{
  color: #333;
}
.top-left p span{
  margin: 0 3px;
}
.top-left p span:first-child{
  margin-left: 0;
}
.left-img{
  width:60px;
  height: 60px;
  border-radius: 30px;
  float: left;
  background-color: #eee;
  margin-right: 6px;
  overflow: hidden;
}
.left-img img{
  width: 100%;
  height: 100%;
}
.left-info{
  flex: 1
}
.item-bottom{
  width: 100%;
  height: 32px;
  line-height: 32px;
  margin-top: 6px;
  border-top: 1px solid #eee;
}
</style>
