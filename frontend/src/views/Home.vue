<template>
    <div id="home" class="page">
      <h1><b>추천 영상</b></h1>
      <div class="short-list">
        <ShortSummary 
            class="item"
            v-for="(value,index) in RecommendShortList" 
            :key="index" 
            :shortInfo="value"
        />
      </div>
      <div class="loading-guide" v-if="isRecommendShortLoading==='loading'">
        <font-awesome-icon class="loading icon" icon='spinner' spin/>
        <div class="space"></div>
        <p class="guide-text">loading</p>
      </div>
      <div class="loading-guide" v-else-if="isRecommendShortLoading==='end'">
        <p>더 이상 불러올 컨텐츠가 없습니다.</p>
      </div>
    </div>
</template>

<script>
import ShortSummary from '../components/ShortSummary.vue'
import Menubar from '../components/Menubar.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    Menubar,
    ShortSummary
  },
  data() {
    return {

    }
  },
  computed: {
      ...mapState([
          'RecommendShortList',
          'isRecommendShortLoading'
      ]),
  },
  methods: {
      ...mapActions([
          'getRecommendShorts',
          'requestSearch'
      ]),
  },
}
</script>
<style scoped>
#home h1 {
  text-align:left;
}
#home .short-list {
  display:flex;
  flex-direction:row;
  justify-content: flex-start;
  width:100%;
  flex-wrap:wrap;
}
.item {
  margin-bottom:100px;
  margin-right:40px;
}
.loading-guide {
  display:flex;
  flex-direction:column;
  width:100%;
}
.space {
  height:20px;
  
}
.loading-guide > * {
  margin:0 auto;
}
.guide-text {
  animation:fade-in-out 1.6s infinite;
}
@keyframes fade-in-out {
  0% {
    opacity:0;
  }
  50% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
}
</style>