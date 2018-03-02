<template>
  <div class="cooperation-page">
      <div class="cooperation-content">
        <div class="img">
          <img :src="img" alt="">
        </div>
        <div class="text">
            <p>筑加人才网是一家专注于建筑人才招聘及培训的平台。目前诚招个地级市运营合作商，合作伙伴可享有运营当地分站的权益，分享企业品牌资源及宣传效果，享受服务企业、人才及广告所获得的收益分成。</p>
            <p>同时,欢迎有需求的建筑类企业入驻，您会享受到高质量的人才招聘及人才培训服务。</p>
            <h4>合作详情恭请联系：0771-5714190</h4>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {
      img:require('@/assets/img/join_bg.jpg')
    }
  },

}
</script>
<style lang="less" scoped>
.cooperation-page,.cooperation-content{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
}
.cooperation-content{
  padding-top: 20px;
}
.img{
  width:100%;
  padding:10px 15px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
}
.img img{
  width: 100%;
}
.text{
    padding:15px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
}
.text p{
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 15px;
  color: #666;
}
.text h4{
  font-size: 15px;
}
</style>
