<template>
  <div id="nav">
    <router-link to="/">
      <img class="logo" src="@/assets/logo.png"/>
    </router-link>
    <Search id="search-bar"/>
    <button class="white" @click="openLogin">login</button> |
    <router-link class="primary" to="/about">
      <button>AI 얼굴 분석</button>
    </router-link>
  </div>
  <router-view/>
  <BlurCard v-if="loginClicked" @close="closeLogin">
      <div style="width:500px; height:500px; background-color:black;"></div>
  </BlurCard>
</template>
<script>
import Search from '@/components/Searchbar.vue'
import BlurCard from '@/components/BlurCard.vue'
export default {
  data() {
    return {
      loginClicked:false
    }
  },
  components: {
    Search,
    BlurCard
  },
  methods: {
    closeLogin() {
      this.loginClicked = false;
    },
    openLogin() {
      this.loginClicked = true;
    }
  }
}
</script>
<style lang="scss">
:root {
  --white-text-color: #FEFEFE;
  --placeholder-color: #CCCCCC;
  --text-color:#000000;
  --background-color: #FEFEFE;
  --primary-color: #3D3D78;
  --error-color: #FF5252;
  --warning-color: #FB8C00;
  --info-color: #2196F3;
  --success-color: #4CAF50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border-bottom:1px solid #cccccc;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo {
  width:40px;
  height:40px;
}
button {

}
</style>
