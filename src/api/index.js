import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/json';

const baseUrl = 'http://www.mytalent.com/api/v1'

export default {
  //获取首页数据
  getIndexData() {
    return axios.get(`${baseUrl}/index`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //获取招聘列表页数据
  getPositionList(cate_id='',nowPage=1) {
    let param;
    if(cate_id){
      param = `cate_id=${cate_id}&nowPage=${nowPage}`
    }else{
      param = `nowPage=${nowPage}`
    }

    return axios.get(`${baseUrl}/position?${param}`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //根据职位id获取职位详情
  getPosDetailById(pos_id) {
    return axios.get(`${baseUrl}/positionDetail/${pos_id}`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //获取企业列表页数据
  getCompanyList() {
    return axios.get(`${baseUrl}/company`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //获取企业详情
  getCompanyDetailById(comp_id) {
    return axios.get(`${baseUrl}/companyDetail/${comp_id}`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //人才列表
  getResumeList(nowPage=1) {
    return axios.get(`${baseUrl}/resume?nowPage=${nowPage}`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //用户注册
  userRegist(data) {
    return axios.post(`${baseUrl}/register`,data).then((res)=>{
      return Promise.resolve(res.data)
    })
    // return axios({
    //   url:`/dev/v1/register`,
    //   method: 'post',
    //   dataType:'json',
    //   data:data
    // }).then((res)=>{
    //   return Promise.resolve(res.data)
    // })
  },
  // 用户注册
  userLogin(data) {
    return axios.get(`${baseUrl}/login`,{params:data}).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //用户简历获取
  getUserInfo(user_id) {
    return axios.get(`${baseUrl}/getUserInfo/${user_id}`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //简历更新
  upDateResume(data) {
    return axios.post(`${baseUrl}/upDateResume`,data).then((res)=>{
      return Promise.resolve(res.data)
    })
    // return axios({
    //   url:`/dev/v1/upDateResume`,
    //   method: 'post',
    //   dataType:'json',
    //   data:data
    // }).then((res)=>{
    //   return Promise.resolve(res.data)
    // })
  },
  //获取求职详情
  getResumeDetail(user_id) {
    return axios.get(`${baseUrl}/resumeDetail/${user_id}`).then((res)=>{
      return Promise.resolve(res.data)
    })
  }
}
