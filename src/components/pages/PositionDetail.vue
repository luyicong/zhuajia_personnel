<template>
    <div id="position-detail">
      <div class="position-info detail-moudle-item">
        <div class="info-item position-name">
          <h3>建筑设计师</h3>
          <span><x-icon type="ios-heart-outline" size="18"></x-icon>收藏</span>
        </div>
        <!-- <div class="update-time">
          最近更新于：2018.02.01
        </div> -->
        <div class="info-item desc">
          <flexbox :gutter="0" wrap="wrap" class="cate-list">
                <flexbox-item :span="1/3"><p><span class="key">薪资：</span><span class="salary">7k-10k</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">地点：</span><span>广西南宁</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">性别：</span><span>不限</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">学历：</span><span>不限</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">方式：</span><span>全职</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">经验：</span><span>1-2年</span></p></flexbox-item>
                <flexbox-item :span="1/3"><p><span class="key">年龄：</span><span>不限</span></p></flexbox-item>
          </flexbox>

        </div>
      </div>
      <div class="company-info detail-moudle-item">
        <div class="company-img">
          <img :src="defaultImg" alt="" width="60" height="60">
        </div>
        <div class="company-desc">
          <h3>广西某某某建筑工程有限公司</h3>
          <p>
            <span>100-300人</span>
            <span>民营</span>
          </p>
          <p>设计施工一条龙服务</p>
        </div>
        <p class="right-icon" ><x-icon type="ios-arrow-right" size="20"></x-icon></p>
      </div>
      <div class="position-requirement detail-moudle-item">
        <div class="moudle-item-title"><h3>职位描述</h3></div>
        <div class="pos-requirement-desc">
          1、性别不限，30岁以下；<br>
          2、专业不限，需精通电脑，熟悉3Dmax、 ps、视频制作、平面广告等，应届生亦可；<br>
          3、具有团结合作、吃苦耐劳精神；<br>
          4、周末双休，享正常节假日薪酬面议。
        </div>
      </div>
      <div class="company-contact detail-moudle-item">
        <div class="moudle-item-title"><h3>联系方式</h3></div>
        <div class="company-contact-content">
          <p>0771-38383388</p>
          <p>广西南宁市青秀区南湖公园</p>
        </div>
        <div class="safe-tip">
          面试过程中，遇到用人单位收取费用请提高警惕
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
.detail-content{
  /* margin-top: 46px; */
}
.slide-enter-active, .slide-leave-active{
    transition: all 0.3s
}

.slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0)
}

.detail-moudle-item{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 10px;
}
.update-time{
  font-size: 14px;
  height: 26px;
  line-height: 26px;
  padding:0 10px;
  color: #999;
}
.info-item{
  border-bottom: 1px solid #eee;
  padding:0 10px;
}
.position-name{
  height: 40px;
  line-height: 40px;
}
.position-name h3{
  font-size: 16px;
  color: #333;
  float: left;
  width: 70%;
}
.position-name span{
  float: right;
  line-height: 40px;
  font-size: 14px;
  color: #999;
}
.position-name span svg{
  float: left;
  margin-top: 11px;
  margin-right: 3px;
  fill:#999;
}
.position-info .desc{
  width: 100%;
  overflow: hidden;
  padding:10px;
}
.position-info .desc p{
  height: 32px;
  line-height: 32px;
  color: #666;
  font-size: 14px;
}
.desc p .salary{
  color: #ff552e;
  font-weight: 600;
  font-size: 16px;
}
.company-info{
  padding:10px;
  display: flex;
  box-sizing: border-box;
  position: relative;
}
.company-info .company-img{
  width: 60px;
  height: 60px;
  overflow: hidden;
  float: left;
  margin:5px 10px 5px 0;
}
.company-info .company-desc{
  flex: 1;
}
.company-desc{
  font-size: 14px;
}
.company-desc h3{
  font-size: 16px;
  height: 26px;
  line-height: 26px;
  overflow: hidden;
  color: #333;
}
.company-desc p{
  color: #999;
}
.company-info .right-icon{
  position: absolute;
  top: 15px;
  right: 5px;
  line-height: 70px;
}
.company-info .right-icon svg{
  fill:#999;
}
.position-requirement{

}
.moudle-item-title{
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #eee;
}
.moudle-item-title h3{
    font-size: 16px;
    margin-left: 10px;
    float: left;
}
.pos-requirement-desc{
    padding:10px;
    font-size: 14px;
    color: #999;
    line-height: 26px;
}
.company-contact-content{
  padding:10px;
}
.company-contact-content p{
  height: 36px;
  color: #666;
  line-height: 36px;
  text-indent: 24px;
}
.company-contact-content p:first-child{
  background: url(../../assets/img/phone.png) no-repeat 0 center;
  background-size: 18px 18px;
}
.company-contact-content p:last-child{
  background: url(../../assets/img/address.png) no-repeat 0 center;
  background-size: 18px 18px;
}
.safe-tip{
    width: 88%;
    height: 30px;
    line-height: 30px;
    background-color: #FFFFE9;
    margin:10px auto;
    font-size: 14px;
    text-align: center;
    border:1px solid #F3EAC3;
    border-radius: 4px;
    color: #009ee5;
}
</style>
