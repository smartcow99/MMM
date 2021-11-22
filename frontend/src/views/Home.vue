<template>
    <div id="home" class="page">
      <h1>추천 영상</h1>
      <div class="short-list">
        <ShortSummary 
            class="item"
            v-for="(value,index) in RecommendShortList" 
            :key="index" 
            :shortInfo="value"
        />
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
            'RecommendShortList'
        ])
    },
    methods: {
        ...mapActions([
            'getRecommendShorts',
            'requestSearch'
        ])
    },
  watch: {
    '$route': {
      immediate: true,
      handler(to,from) {
          this.getRecommendShorts();
      }
    }
  }
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
</style>