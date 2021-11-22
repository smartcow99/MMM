<template>
    <article id="home">
      <h1>추천 영상</h1>
      <div class="short-list">
        <ShortSummary 
            id="temp"
            v-for="(value,index) in recommandShortList" 
            :key="index" 
            :shortInfo="value"
        />
      </div>
    </article>
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
            'recommandShortList'
        ])
    },
    methods: {
        ...mapActions([
            'getRecommandShorts',
            'requestSearch'
        ])
    },
  watch: {
    '$route': {
      immediate: true,
      handler(to,from) {
          this.getRecommandShorts();
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
  justify-content: space-between;
  max-width:1000px;
  width:100%;
  flex-wrap:wrap;
}
#temp {
  margin-bottom:100px;
}
</style>