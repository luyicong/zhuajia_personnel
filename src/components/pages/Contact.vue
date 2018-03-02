<template>
  <div class="cooperation-page">
      <div class="cooperation-content">
        <div class="img">
          <img :src="img" alt="">
        </div>
        <div class="text">
          <p>服务热线：400-888-8888</p>
          <p>公司电话：0771-5714190</p>
          <p>公司邮箱：88888@hujiarenjia.com</p>
          <p>微信公众号：zhujia100_com</p>
          <p><h4>公司地址：</h4></p>
          <p>广西南宁市青秀区月湾路1号南国弈园5层</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {
      img:require('@/assets/img/contact.jpg')
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
  line-height: 20px;
  margin-bottom: 15px;
  color: #666;
}
.text h4{
  font-size: 15px;
}
</style>
