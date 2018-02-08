<template>
  <div class="loading-more">
    <load-more v-if="isLoad" :show-loading="isLoad && (text == '加载中')" :tip="text" background-color="#f0f2f5"></load-more>
    <div v-else class="load-more" @click="loadMore()">{{text==='加载中'?'加载更多':text}}</div>
  </div>
</template>
<script>
import { LoadMore } from 'vux'
export default {
  props:{
    isLoad:{
      type:Boolean,
      default:false
    },
    text:{
      type:String,
      default:'加载中'
    }
  },
  components: {
    LoadMore
  },
  name: "",
  data () {
    return {

    }
  },
  methods: {
    loadMore() {
      this.$emit('loadMore')
    }
  }
}
</script>
<style scoped>
.load-more{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #f0f2f5;
  text-align: center;
  font-size: 15px;
}
</style>
