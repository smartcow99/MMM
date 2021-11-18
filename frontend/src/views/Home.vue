<template>
    <div>
      home
      <!-- <Menubar/> -->
      <!--추천 shorts 만 나오도록 -->
      <div id="shortList">
        <ShortSummary 
            v-for="(value,index) in shortList" 
            :key="index" 
            :shortInfo="value"
        />
        </div>
    </div>
</template>

<script>
import Menubar from '../components/Menubar.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    Menubar
  },
  data() {
    return {

    }
  },
  computed: {
        ...mapState([
            'shortList'
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
          if(!!to.query['content']) {
              this.requestSearch({
                  'type':'short',
                  'content':this.$route.query
              });
          }
          else {
              this.getRecommandShorts();
          }
      }
    }
  }
}
</script>
