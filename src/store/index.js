import Vue from 'vue'

import Vuex from 'vuex'

import { cookie } from 'vux'

Vue.use(Vuex)

const store = new Vuex.Store({}) // 这里你可能已经有其他 module

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})

store.registerModule('search', {
  state: {
    typeVal: '找工作',
    searchList: []
  },
  mutations: {
    updateTypeVal (state, payload) {
      state.typeVal = payload.type
    },
    updateSearchList (state, payload) {
      state.searchList = payload.list
    }
  },
  actions: {
    updateTypeVal ({commit}, type) {
      commit({type:'updateTypeVal',type:type})
    },
    updateSearchList ({commit}, List) {
      commit({type:'updateSearchList',List:List})
    }
  }
})

store.registerModule('user', {
  state: {
    userInfo: Boolean(cookie.get('user'))?JSON.parse(cookie.get('user')):{}
  },
  getters: {
    getUserInfo(state){
      return state.userInfo
    }
  },
  mutations: {
    //设置
    setUserInfo(state,payload) {
      state.userInfo = payload.userInfo
    },
    //退出登录
    logout(state,payload) {
      state.userInfo = payload.userInfo
      cookie.remove('user')
    }
  },
  actions: {

  }
})

export default store;
