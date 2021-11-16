<template>
  <header id="nav">
    <router-link to="/">
      <img class="logo" src="@/assets/images/logo.png"/>
    </router-link>
    <Search id="search-bar"/>
    <button v-if="userInfo['isLogined']" class="white" @click="logout">로그아웃</button>
    <button v-else class="white" @click="openLogin">로그인</button> |
    <router-link class="primary" to="/analytic">
      <button>AI 얼굴 분석</button>
    </router-link>
  </header>
  <main>
    <aside>
      <Profile 
        :userInfo="userInfo" 
        @openLogin="openLogin"
        @openUpload="openUpload"
      />
      <RecommendChannels :channelList="recommandChannels"/>
      <h3>추천 태그</h3>
      <TagList :tagList="recommandTags"/>
    </aside>
    <router-view/>
  </main>
  <BlurCard v-if="loginClicked" @close="closeLogin">
    <LoginCard/>
  </BlurCard>
  <BlurCard v-if="uploadClicked" @close="closeUpload">
      <ShortUpload/>
  </BlurCard>
  <Short 
    v-if="currentShort['isOpened']"
    :info="currentShort"
    @close="closeShort"
  />
  
</template>
<script>
import Profile from '@/components/Profile.vue'
import Search from '@/components/Searchbar.vue'
import Short from '@/components/Short.vue'
import BlurCard from '@/components/BlurCard.vue'
import RecommendChannels from '@/components/recommendChannels.vue'
import TagList from '@/components/TagList.vue'
import ShortUpload from './components/ShortUpload.vue'
import LoginCard from '@/components/LoginCard.vue'

import {mapState,mapActions} from 'vuex'

export default {
  data() {
    return {
      loginClicked:false,
      uploadClicked:false,
    }
  },
  components: {
    Search,
    BlurCard,
    Short,
    Profile,
    RecommendChannels,
    TagList,
    ShortUpload,
    LoginCard,
  },
  mounted() {
    this.getRecommandTags();
    this.getRecommandChannels();
  },
  computed: {
    ...mapState([
      'userInfo',
      'recommandTags',
      'recommandChannels',
      'currentShort'
    ])
  },
  methods: {
    ...mapActions([
      'requestLogout',
      'getRecommandTags',
      'getRecommandChannels'
    ]),
    closeLogin() {
      this.loginClicked = false;
    },
    openLogin() {
      this.loginClicked = true;
    },
    closeUpload() {
      this.uploadClicked = false;
    },
    openUpload() {
      this.uploadClicked = true;
    },
    closeShort() {
      this.currentShort['isOpened'] = false;
    },
    logout() {
      alert('logout clicked');
      // this.requestLogout();
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
  --background-color-darken: #EEEEEE;
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

header#nav {
  padding: 20px;
  border-bottom:1px solid #cccccc;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .logo {
    width:40px;
    height:40px;
  }
}
main {
  padding:0 100px;
  display:flex;
  flex-direction:row;
}
aside {
  width:200px;
  background-color:#CCCCCC;
}
</style>
