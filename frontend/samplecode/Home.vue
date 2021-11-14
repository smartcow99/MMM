<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="counting">버튼</button>
    <input type="text" v-model.number="str" @change="log"><br/>
    <input type="text" v-model="str" @change="log">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState,mapMutations,mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      arr: ['a','b','c'],
      count:0,
      str:"",
      stateDuplicate:"abc",

    }
  },
  mounted() {
    console.log(this.$store.state)
    this.stateDuplicate = this.$store.state.isState;
    this.$store.commit('callMutation',"1234");
    this.$store.dispatch('callAction');
    this.callAction();
  },
  methods: {
    ...mapActions([
      'callAction'
    ]),
    log() {
      console.log(this.str);
    },
    counting() {
      this.count++;
    },
    changer() {
      this.arr.push('d');
    }
  },
  computed: {
    doubleCount() {
      return this.count*2;
    }
  },
  watch: {
    str(newV,oldV) {
      console.log(newV,oldV);
      if(newV.length > 12) {
        this.str="abc";
      }
    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style>
.red {
  color:red;
}
.blue {
  background-color:blue;
}
</style>