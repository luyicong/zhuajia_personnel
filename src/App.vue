<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <x-header
      style="position:absolute;top:0;left:0;width:100%;z-index:999"
      :left-options="leftOptions"
      :title="title"
      :transition="headerTransition"
    >
    <!-- <span v-if="$route.path === '/'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
      <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </span> -->
    <div slot="right">
      <!--<div style="width:30px;height:30px; center center no-repeat;margin:0 auto 0 auto;">
      	<a class="text">?</a>
      </div>-->
    </div>
    </x-header>
    <view-box ref="viewBox" body-padding-top="46px" :body-padding-bottom="view_body_pb">
      <transition
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
      :name="viewTransition" :css="!!direction">
          <router-view class="router-view"></router-view>
      </transition>
    </view-box>
    <tabbar style="position:fixed;max-width:540px;" v-if="isShowFoot">
      <tabbar-item :selected="$route.path === '/'" link="/">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
        <i slot="icon" class="iconfont icon-home"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path === '/positionlist'" link="/positionlist">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
        <i slot="icon" class="iconfont icon-zhaopin"></i>
        <span slot="label">热门招聘</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path === '/resume'" link="/resume">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
        <i slot="icon" class="iconfont icon-rencaizhongxin"></i>
        <span slot="label">求职信息</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path === '/user'" :link="Boolean(this.user.user_id)?`/user`:`/login`">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
        <i slot="icon" class="iconfont icon-user"></i>
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Loading , XHeader , ViewBox , Tabbar, TabbarItem , Drawer } from 'vux'
import { mapState , mapMutations} from 'vuex'
export default {
  components:{ Loading , XHeader , ViewBox , Tabbar, TabbarItem , Drawer},
  name: 'app',
  data () {
    return {
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left',
      view_body_pb:'55px'
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.common.isLoading,
      direction: state => state.common.direction,
      user: state => state.user.userInfo,
      isShowFoot: state => state.common.isShow,
      isInWeixin: state => state.common.is_in_weixin,
    }),
    leftOptions () {
      return {
        showBack: (this.$route.path !== '/' && this.$route.path !== '/positionlist' && this.$route.path !== '/resume' && this.$route.path !== '/user')
      }
    },
    is_weixn () {
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            // alert('是微信webview打开')
            return true;
        } else {
            return false;
        }
    },
    headerTransition () {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    },
    title () {
      switch (this.$route.path) {
        case '/':
          this.view_body_pb = '55px'
          this.upDateIsShow({isShow:true});
          return '筑加人才网'
          break;
        case '/cooperation':
          this.view_body_pb = '0px'
          this.upDateIsShow({isShow:false});
          return '加盟合作'
          break;
        case '/contact':
          this.view_body_pb = '0px'
          this.upDateIsShow({isShow:false});
          return '联系我们'
          break;
        case '/advpage':
          this.view_body_pb = '0px'
          this.upDateIsShow({isShow:false});
          return '某某某活动'
          break;
        case '/search':
          return '搜索'
          break;
        case '/positionlist':
          return '职位列表'
          break;
        case '/resume':
          return '求职列表'
          break;
        case '/login':
          return '登录'
          break;
        case '/register':
          return '注册'
          break;
        case '/user':
          return '个人中心'
          break;
        case '/userinfo':
          return '个人资料'
          break;
        case '/collectionpage':
          return '我的收藏'
          break;
        case '/posdetail':
          console.log('5555555')
          this.upDateIsShow({isShow:false});
          return '详情'
          break;
        case '/companydetail':
          return '企业简介页'
          break;
        case '/resumedetail':
          return '简历详情页'
          break;
        case '/storeresume':
          return '简历管理'
          break;
      }
    },
  },
  methods: {
    ...mapMutations({upDateIsShow:'upDateIsShow'}),

    onShowModeChange (val) {
      /** hide drawer before changing showMode **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showModeValue = val
      }, 400)
    },
    onPlacementChange (val) {
      /** hide drawer before changing position **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showPlacementValue = val
      }, 400)
    },
    onClickMore () {
      this.showMenu = true
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
html,body{
  font-family: Helvetica;
  // font-size: 62.5%;
}
html{
  height:100%;
}
body {
  background-color: #f0f2f5;
  height:100%;
  color: #333;
  max-width: 540px;
  margin:0 auto;
}
#app{
  height:100%;
  /*padding-top:46px;*/
  box-sizing:border-box;
}
// .text{
//   width: 30px;
//   height: 30px;
//   border-radius: 15px;
//   border: 1px solid #fff;
//   text-align: center;
//   font-size: 16px;
//   line-height: 30px;
//   -webkit-animation: scaleout 2s infinite ease-in-out;
//   animation: scaleout 2s infinite ease-in-out;
// }
// @-webkit-keyframes scaleout {
//     0% {
//       -webkit-transform: scale(1.0);
//       transform: scale(1.0);
//     }
//     100% {
//         -webkit-transform: scale(1.1);
//         opacity: 0.5;
//     }
// }
// @keyframes scaleout {
//     0% {
//         transform: scale(1.0);
//         -webkit-transform: scale(1.0);
//     } 100% {
//           transform: scale(1.1);
//           -webkit-transform: scale(1.1);
//           opacity: 0.5;
//       }
// }

.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: transform 300ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
