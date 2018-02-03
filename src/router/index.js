import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Search from '@/components/pages/Search'
import User from '@/components/pages/User'
// import Detail from '@/components/pages/Detail'

Vue.use(Router)

const BaseUrl = '@/components/pages/'

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'index',
      component: Index
    },
    //求职列表
    {
      path: '/resume',
      name: 'Resume',
      component: (resolve)=>{
        require([`@/components/pages/Resume`], resolve)
      }
    },
    //求职详情页
    {
      path: '/resumedetail',
      name: 'ResumeDetail',
      component: (resolve)=>{
        require(['@/components/pages/ResumeDetail'], resolve)
      }
    },
    //搜索页面
    {
      path: '/search',
      name: 'Search',
      component: (resolve)=>{
        require(['@/components/pages/Search'], resolve)
      }
    },
    //企业列表
    {
      path: '/companylist',
      name: 'CompanyList',
      component: (resolve)=>{
        require(['@/components/pages/CompanyList'], resolve)
      }
    },
    //企业详情页
    {
      path: '/companydetail',
      name: 'CompanyDetail',
      component: (resolve)=>{
        require(['@/components/pages/CompanyDetail'], resolve)
      }
    },
    //招聘职位列表
    {
      path: '/positionlist',
      name: 'PositionList',
      component: (resolve)=>{
        require(['@/components/pages/PositionList'], resolve)
      }
    },
    //职位详情页
    {
      path: '/posdetail',
      name: 'PositionDetail',
      component: (resolve)=>{
        require(['@/components/pages/PositionDetail'], resolve)
      }
    },
    //用户登录
    {
      path: '/login',
      name: 'Login',
      component: (resolve)=>{
        require(['@/components/pages/Login'], resolve)
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: (resolve)=>{
        require(['@/components/pages/Register'], resolve)
      }
    },
    //用户中心
    {
      path: '/user',
      name: 'User',
      component: (resolve)=>{
        require(['@/components/pages/User'], resolve)
      }
    }
  ]
})
