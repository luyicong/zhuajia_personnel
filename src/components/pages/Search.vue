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
           v-model="keyword"
           :auto-fixed="false"
           ref="search"
           ></search>
      </div>
    </div>
    <div class="key-history-list" v-if="(!searchList.length && !keyword)">
      <p v-for="item in historyList" @click="searchByHis(item)">{{item.keyword}}</p>
    </div>
    <div class="search-result-list" v-if="searchList.length">
      <job-list v-if="type === `pos`" :data="searchList"></job-list>
      <candidate-list v-else-if="type === `talent`" :data="searchList"></candidate-list>
      <com-list v-else-if="type === `comp`" :data="searchList"></com-list>
    </div>
    <div v-if="!searchList.length && !historyList.length" class="search-result-list" style="background-color:#f0f2f5">
        <p style="height:50px;line-height:50px;font-size:14px;color:#666;text-align:center;">{{textTip}}</p>
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

import { Search , XInput , PopupHeader, Popup, Group , Cell , Radio ,TransferDom , cookie} from 'vux'
//工作列表
import JobList from '../common/JobList'
//人才列表
import CandidateList from '../common/CandidateList'
//企业列表
import ComList from '../common/ComList'

import { mapState , mapMutations , mapActions} from 'vuex'

import Api from '../../api'

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
      //类型
      type:'pos',

      popupShow:false,

      keyword:'',

      results: [],

      autoFixed: false,

      textTip:'请输入相关关键字搜索',

      //搜索记录
      historyList:[]
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
    this.type = 'pos'
    this.historyList = Boolean(cookie.get('keyList'))?JSON.parse(cookie.get('keyList')):[]

    console.log(this.historyList)
    // console.log(this.historyList)
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
      switch (this.selectVal) {
        case '找工作':
          this.type = 'pos'
          break;
        case '找人才':
          this.type = 'talent'
          break;
        case '找企业':
          this.type = 'comp'
          break;
      }
      this.updateSearchList({list:[]});
      this.historyList = []
      this.keyword = ''
      this.results = []
    },
    setBlur () {
      this.$refs.search.setBlur()
    },
    resultClick (item) {
     // window.alert('you click the result item: ' + JSON.stringify(item))
     this.onSubmit()
   },
   getResult (val) {
     this.results = val ? getResult(this.keyword) : []
   },
   searchByHis(item) {
     this.keyword = item.keyword;
     this.type = item.type;
     this.onSubmit()
   },
   onSubmit (val) {
     this.setBlur()
     // window.alert('on submit' + val)
     this.$vux.loading.show({
       position:'absolute',
       text: '正在搜索'
      })
    this.historyList = Boolean(cookie.get('keyList'))?JSON.parse(cookie.get('keyList')):[]
     this.historyList.push({type:this.type,keyword:this.keyword});
     // this.historyList =  new Set(this.historyList);
     this.historyList = this.historyList.unique('keyword')
     this.historyList = JSON.stringify(this.historyList)
     cookie.set('keyList',this.historyList);
     this.updateSearchList({list:[]});
     Api.search(this.type,this.keyword).then((res)=>{
       if(res.status == 1){
            setTimeout(()=>{
               this.updateSearchList({list:res.data});
               if(!res.data.length)   this.textTip ='没有搜索到相关结果'
               this.$vux.loading.hide()
            },2000)
       }
     })
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
  for (let i = 0; i < 1; i++) {
    rs.push({
      title: `${val}`,
      other: i
    })
  }
  return rs
}

Array.prototype.unique = function(key) {
    var arr = this;
    var n = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (key === undefined) {
            if (n.indexOf(arr[i]) == -1) n.push(arr[i]);
        } else {
            inner: {
                var has = false;
                for (var j = 0; j < n.length; j++) {
                    if (arr[i][key] == n[j][key]) {
                        has = true;
                        break inner;
                    }
                }
            }
            if (!has) {
                n.push(arr[i]);
            }
        }
    }
    return n;
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
  height: 44px;
  position: relative;
}
.search-input-wrap .vux-search-fixed{
  width: 100%;
}
.key-history-list{
  width: 100%;
  overflow: hidden;
  padding:10px;
  box-sizing: border-box;
  /* display: flex; */
}
.key-history-list p{
  float: left;
  height: 26px;
  line-height: 26px;
  padding:0 10px;
  font-size: 14px;
  background-color: #fff;
  margin-right: 15px;
  border-radius: 6px;
  margin-top:10px;
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
