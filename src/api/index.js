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
  getPositionList(cate_id='',nowPage=1) {
    return axios.get(`${baseUrl}/position?cate_id=${cate_id}&nowPage=${nowPage}`).then((res)=>{
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
  }
}
