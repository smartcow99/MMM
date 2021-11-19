<template>
    <div id="home">
      home
      <div class="short-list">
        <ShortSummary 
            v-for="(value,index) in recommandShortList" 
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
#home .short-list {
  display:flex;
  flex-direction:row;
}
</style>