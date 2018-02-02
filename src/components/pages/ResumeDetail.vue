<template>
    <div class="resume-detail">
      <div class="resume-info-moudle resume-header">
        <div class="header-top-bg">
          <div class="head-img">
            <img :src="defaultImg" alt="">
          </div>
        </div>
        <div class="header-bottom">
          <p><strong>黄小明</strong></p>
          <p><span>男</span>|<span>22岁</span>|<span>大专</span>|<span>不限工作经验</span></p>
        </div>
      </div>
      <div class="resume-info-moudle job-want">
        <div class="moudle-common-title">
          <!-- <span class="icon"><x-icon type="ios-heart" size="18"></x-icon></span> -->
          求职意向</div>
        <div class="info-moudle-content">
          <p>
            <span lass="key">求职状态：</span><span class="val">我目前已离职，可快速到岗</span>
          </p>
          <p>
            <span lass="key">工作性质：</span><span class="val">实习</span>
          </p>
          <p>
            <span lass="key">期望行业：</span><span class="val">设计类</span>
          </p>
          <p>
            <span lass="key">期望职位：</span><span class="val">设计助理：</span>
          </p>
          <p>
            <span lass="key">期望地区：</span><span class="val">广西南宁</span>
          </p>
          <p>
            <span lass="key">期望薪资：</span><span class="val">1.5k-3k/月</span>
          </p>
        </div>
      </div>
      <div class="resume-info-moudle user-contact">
        <div class="moudle-common-title">联系方式</div>
        <div class="info-moudle-content">
          <p>
            <span lass="key">手机：</span><span class="val">183****0435</span><span class="nologin-tip">（登录后查看）</span>
          </p>
          <p>
            <span lass="key">邮箱：</span><span class="val">980****87@qq.com</span><span class="nologin-tip">（登录后查看） </span>
          </p>
        </div>
      </div>
      <div class="resume-info-moudle user-edu-experience">
        <div class="moudle-common-title">教育经历<span class="edu-num">1段教育经历</span></div>
        <div class="info-moudle-content">
          <div class="info-moudle-item">
            <p>
              <span class="val">广西大学</span><span>（2年10个月）</span>
            </p>
            <p>
              <span lass="key">2015.9-2018.7</span>|
              <span lass="key">大专</span>|
              <span lass="key">建筑装饰工程技术</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { Flexbox , FlexboxItem} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  name: "",
  data () {
    return  {
      defaultImg:require('@/assets/img/no_photo_male.png')
    }
  }
}
</script>
<style scoped>
.resume-detail,.resume-info-moudle{
  width: 100%;
  overflow: hidden;
}
.resume-info-moudle{
    margin-bottom: 10px;
    background-color: #fff;
}
.header-top-bg{
   height: 80px;
   position: relative;
   background: -webkit-linear-gradient(90deg, #efcc4c,#ff5716); /* Safari 5.1 - 6.0 */
   background: -o-linear-gradient(90deg, #efcc4c,#ff5716); /* Opera 11.1 - 12.0 */
   background: -moz-linear-gradient(90deg, #efcc4c,#ff5716); /* Firefox 3.6 - 15 */
   background: linear-gradient(90deg, #efcc4c,#ff5716); /* 标准的语法（必须放在最后） */
}
.header-top-bg .head-img{
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  position: absolute;
  left:50%;
  margin-left: -40px;
  top:36px;
}
.header-top-bg .head-img img{
  width: 100%;
  height: 100%;
}
.header-bottom{
  height: 80px;
  padding-top: 46px;
  text-align: center;
}
.header-bottom p{
  height: 26px;
  line-height: 26px;
  font-size: 16px;
  color: #999;
}
.header-bottom p strong{
  color: #333;
}
.header-bottom p span{
  color: #999;
  margin:0 2px;
}
.moudle-common-title{
    width: 100%;
    padding:0 10px;
    box-sizing: border-box;
    height: 46px;
    border-bottom: 1px solid #eee;
    line-height: 46px;
}
.moudle-common-title .edu-num{
  color: #009ee5;
  float: right;
  font-size: 14px;
}
.info-moudle-content{
  width: 100%;
  padding:10px;
  box-sizing: border-box;
}
.info-moudle-content p{
  color: #999;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
}
.info-moudle-content .val{
  color: #666;
}
.info-moudle-content  .nologin-tip{
  color: #009ee5;
}
.moudle-common-title svg{
  fill:#009ee5;
}
.moudle-common-title .icon{
  margin-top: 5px;
  float: left;
  margin-right: 3px;
}
</style>
