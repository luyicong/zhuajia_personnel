import axios from 'axios'

const baseUrl = 'http://www.mytalent.com/api/v1'

export default {
  //获取首页数据
  getIndexData() {
    return axios.get(`${baseUrl}/index`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //获取招聘列表页数据
  getPositionList() {
    return axios.get(`${baseUrl}/position`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //获取企业列表页数据
  getCompanyList() {
    return axios.get(`${baseUrl}/company`).then((res)=>{
      return Promise.resolve(res.data)
    })
  },
  //人才列表
  getResumeList() {
    return axios.get(`${baseUrl}/resume`).then((res)=>{
      return Promise.resolve(res.data)
    })
  }
}
