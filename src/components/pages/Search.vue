<template>
  <div class="search-page">
    <div class="search-moudle-wrap">
      <div class="search-select" @click="toggleShowPopup()">
        <span v-text="typeVal"></span>
        <x-icon class="arrow-down-icon" type="ios-arrow-down" size="14"></x-icon>
      </div>
      <div class="search-input-wrap">
         <search
           @on-result-click="resultClick"
           @on-change="getResult"
           @on-submit="onSubmit"
           @on-focus="onFocus"
           @on-cancel="onCancel"
           :results="results"
           v-model="keyword"
           position="absolute"
          auto-scroll-to-top top="46px"
           ref="search"
           ></search>
      </div>
    </div>
    <div class="search-result-list">
      <job-list v-if="typeVal === `找工作`" :data="searchList"></job-list>
      <candidate-list v-else-if="typeVal === `找人才`" :data="searchList"></candidate-list>
      <com-list v-else-if="typeVal === `找企业`" :data="searchList"></com-list>
    </div>
    <!--类型选择-->
    <div v-transfer-dom>
      <popup v-model="popupShow">
        <!-- group already has a top border, so we need to hide header's bottom border-->
        <popup-header
        :left-text="'取消'"
        :right-text="'确定'"
        :title="'请选择类型'"
        :show-bottom-border="false"
        @on-click-left="closePopup()"
        @on-click-right="onOk()"></popup-header>
        <group gutter="0">
          <radio :options="['找工作','找人才', '找企业',]" v-model="selectVal"></radio>
        </group>
      </popup>
    </div>
  </div>
</template>
<script>
import { Search , XInput , PopupHeader, Popup, Group , Cell , Radio ,TransferDom} from 'vux'
//工作列表
import JobList from '../common/JobList'
//人才列表
import CandidateList from '../common/CandidateList'
//企业列表
import ComList from '../common/ComList'

import { mapState , mapMutations , mapActions} from 'vuex'

export default {
  components:{
    Search,
    XInput,
    PopupHeader,
    Popup,
    Group,
    Radio,
    TransferDom,
    JobList,
    CandidateList,
    ComList
  },
  directives: {
    TransferDom
  },
  name: 'searchPage',
  data () {
    return {
      isShowCityList:false,
      // typeVal:'找工作',
      selectVal:'',
      popupShow:false,
      keyword:'',
      results: [],
      autoFixed: false,
      //搜索企业结果列表数据
      companyList:[],
      // searchList:[]
    }
  },
  computed:{
    ...mapState({
      typeVal: state => state.search.typeVal,
      searchList: state => state.search.searchList
    })
  },
  created() {
    //do something after creating vue instance
    this.selectVal = this.typeVal
  },
  methods: {
    ...mapMutations(['updateTypeVal','updateSearchList']),
    //切换类型
    toggleShowPopup() {
      // this.selectVal = this.typeVal
      this.updateTypeVal({type:this.selectVal});
      this.popupShow = !this.popupShow
    },
    closePopup() {
      this.popupShow = false
    },
    onOk() {
      this.popupShow = false
      this.updateTypeVal({type:this.selectVal});
      this.updateSearchList({list:[]});
      this.keyword = ''
      this.results = []
    },
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
     // window.alert('you click the result item: ' + JSON.stringify(item))
     this.onSubmit()
   },
   getResult (val) {
     this.results = val ? getResult(this.keyword) : []
   },
   onSubmit (val) {
     // window.alert('on submit' + val)
     this.$vux.loading.show({
       position:'absolute',
       text: '正在搜索'
      })
     setTimeout(()=>{
       switch (this.typeVal) {
          case '找工作':
            // this.searchList = [{},{},{},{},{}]
            this.updateSearchList({list:[{},{},{},{},{}]});
            break;
          case '找人才':
            // this.searchList = [{},{},{},{},{},{}]
            this.updateSearchList({list:[{},{},{},{},{},{}]});
            break;
          case '找企业':
            // this.searchList = [{},{},{},{},{},{},{},{},{},{},{}]
            this.updateSearchList({list:[{},{},{},{},{},{},{},{},{},{},{}]});
            break;
       }
      // this.companyList = [{},{},{},{},{},{},{},{},{},{},{}]
      this.$vux.loading.hide()
     },2000)

   },
   onCancel () {
     console.log('on cancel')
   },
   onFocus () {
     document.querySelector('.vux-search-box').style.left = '100px'
     document.querySelector('.vux-search-box').style.width = 'auto'
     document.querySelector('.vux-search_show').style.left = 0
   }
 },
 destroyed() {
   //do something after destroying vue instance
   this.updateSearchList({list:[]});
 }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 3; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-page{
  width: 100%;
  overflow: hidden;
}
.search-moudle-wrap{
  display: flex;
  height: 44px;
  /* overflow: hidden; */
  border-bottom: 1px solid #D7D6DC;
}
.search-result-list{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.search-select{
  width: 79px;
  height: 43px;
  background-color: #fff;
  padding-right: 20px;
  position: relative;
  text-align: center;
  border-right: 1px solid #D7D6DC;

}
.search-select span{
  line-height: 44px;
  color: #666;
  font-size: 14px;
}
.search-select .arrow-down-icon{
  position: absolute;
  right: 6px;
  top: 16px;
  fill:#999;
}
.search-input-wrap{
  flex:1;
  /* height: 44px; */
  /* position: relative; */
}
#input-box{
  border-radius: 6px;
  background-color: #ddd;
}
#input-box input{
  text-indent: 6px;
}
.vux-x-input{
  background: #fff;
}
</style>
