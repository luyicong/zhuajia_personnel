import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Search from '@/components/pages/Search'
import User from '@/components/pages/User'
import Cooperation from '@/components/pages/Cooperation'
import Contact from '@/components/pages/Contact'
import AdvPage from '@/components/pages/AdvPage'
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
    //活动广告位页面
    {
      path: '/advpage',
      name: 'advpage',
      component: AdvPage
    },
    //加盟合作页面
    {
      path: '/cooperation',
      name: 'cooperation',
      component: Cooperation
    },
    //联系我们页面
    {
      path: '/contact',
      name: 'contact',
      component: Contact
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
      path: '/resumedetail/:id',
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
      path: '/companydetail/:id',
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
      path: '/posdetail/:id',
      name: 'posdetail',
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
    },
    //用户个人信息
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: (resolve)=>{
        require(['@/components/pages/UserInfo'], resolve)
      }
    },
    //修改密码
    {
      path: '/updatepwd',
      name: 'UpdatePwd',
      component: (resolve)=>{
        require(['@/components/pages/UpdatePwd'], resolve)
      }
    },
    //投递记录
    {
      path: '/deliverylist',
      name: 'DeliveryListPage',
      component: (resolve)=>{
        require(['@/components/pages/DeliveryListPage'], resolve)
      }
    },
    //我的收藏/职位收藏
    {
      path: '/collectionpage',
      name: 'CollectionPage',
      component: (resolve)=>{
        require(['@/components/pages/CollectionPage'], resolve)
      }
    },
    //创建/修改 简历
    {
      path: '/storeresume',
      name: 'StoreResume',
      component: (resolve)=>{
        require(['@/components/pages/StoreResume'], resolve)
      }
    }
  ]
})
