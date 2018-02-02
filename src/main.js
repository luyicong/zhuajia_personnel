import Vue from 'vue'

import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'

import router from './router'

import store from './store'

FastClick.attach(document.body)

import { BusPlugin } from 'vux'

Vue.use(BusPlugin)

Vue.config.productionTip = false

import {
    // DatetimePlugin,
    // CloseDialogsPlugin,
    ConfigPlugin,
    // Bus,
  //   LocalePlugin,
  //   DevicePlugin,
  //   ToastPlugin,
  //  AlertPlugin,
  //  ConfirmPlugin,
   LoadingPlugin,
  //  WechatPlugin,
  //  AjaxPlugin,
  //  AppPlugin
 } from 'vux'

// Vue.use(Bus)

// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// plugins
// Vue.use(DevicePlugin)
// Vue.use(ToastPlugin)
// Vue.use(AlertPlugin)
// Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
// Vue.use(WechatPlugin)
// Vue.use(AjaxPlugin)
// Vue.use(BusPlugin)
// Vue.use(DatetimePlugin)

// router.beforeEach(function (to, from, next) {
//   store.commit('UPDATE_LOADING', {isLoading: true})
//   // setTimeout(()=>{
//     next()
//   // },300)
// })
//
// router.afterEach(function (to) {
//   store.commit('UPDATE_LOADING', {isLoading: false})
// })


// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to) {
  isPush = false
  store.commit('updateLoadingStatus', {isLoading: false})
  if (process.env.NODE_ENV === 'production') {
    ga && ga('set', 'page', to.fullPath)
    ga && ga('send', 'pageview')
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
