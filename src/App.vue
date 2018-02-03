<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header
        style="position:absolute;top:0;left:0;width:100%;z-index:999"
        :left-options="leftOptions"
        :title="title"
        :transition="headerTransition"
      >
      <!-- <span v-if="$route.path === '/'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
        <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span> -->
      </x-header>
      <transition
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
      :name="viewTransition" :css="!!direction">
          <router-view></router-view>
      </transition>
      <tabbar style="position:fixed;max-width:540px;">
        <tabbar-item :selected="$route.path === '/'" link="/">
          <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path === '/positionlist'" link="/positionlist">
          <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
          <span slot="label">热门招聘</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path === '/resume'" link="/resume">
          <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
          <span slot="label">求职信息</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path === '/user'" link="/user">
          <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
          <span slot="label">个人中心</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Loading , XHeader , ViewBox , Tabbar, TabbarItem , Drawer } from 'vux'
import { mapState } from 'vuex'
export default {
  components:{ Loading , XHeader , ViewBox , Tabbar, TabbarItem , Drawer},
  name: 'app',
  data () {
    return {
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left'
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    leftOptions () {
      return {
        showBack: (this.$route.path !== '/' && this.$route.path !== '/positionlist' && this.$route.path !== '/resume' && this.$route.path !== '/user')
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
      if (this.$route.path === '/') return '首页'
      if (this.$route.path === '/search') return '搜索'
      if (this.$route.path === '/positionlist') return '职位列表'
      if (this.$route.path === '/resume') return '求职列表'
      if (this.$route.path === '/login') return '登录'
      if (this.$route.path === '/register') return '注册'
      if (this.$route.path === '/user') return '个人中心'
      if (this.$route.path === '/posdetail') return '详情'
      // return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
    },
  },
  methods: {
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
    },
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
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
