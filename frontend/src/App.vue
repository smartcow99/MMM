<template>
  <header id="nav">
    <router-link to="/">
      <img class="logo" src="@/assets/images/logo.png"/>
    </router-link>
    <Search id="search-bar" @search="search"/>
    <Btn v-if="userInfo['isLogined']" @click="logout" theme="primary">로그아웃</Btn>
    <Btn v-else @click="openLogin" theme="primary">로그인</Btn> |
    <router-link class="primary" to="/analysis">
      <Btn theme="white">AI 얼굴 분석</Btn>
    </router-link>
  </header>
  <main>
    <aside>
      <Profile 
        @openLogin="openLogin"
        @openUpload="openUpload"
      />

      <h3>추천 채널</h3>
      <ChannelList :channelList="recommandChannelList"/>
      <h3>추천 태그</h3>
      <div>
        <Tag 
          v-for="(value,index) in recommandTagList" :key="index"
          :title="value"
        />
      </div>
    </aside>
    <router-view class="article"/>
  </main>
  <BlurCard v-if="loginPageOn" @close="closeLogin">
    <LoginCard/>
  </BlurCard>
  <BlurCard v-if="uploadShortPageOn" @close="closeUpload">
      <ShortUpload/>
  </BlurCard>
  <Short 
    v-if="shortPageOn"
    @close="closeShort"
  />
</template>
<script>
import Btn from './components/Btn.vue'
import Profile from '@/components/Profile.vue'
import Search from '@/components/Searchbar.vue'
import Short from '@/components/widget/Short.vue'
import BlurCard from '@/components/BlurCard.vue'
import ChannelList from '@/components/ChannelList.vue'
import Tag from '@/components/Tag.vue'
import ShortUpload from '@/components/widget/ShortUpload.vue'
import LoginCard from '@/components/widget/LoginCard.vue'

import {mapState,mapActions, mapMutations} from 'vuex'


export default {
  data() {
    return {
      uploadClicked:false,
    }
  },
  components: {
    Search,
    BlurCard,
    Short,
    Profile,
    ChannelList,
    Tag,
    ShortUpload,
    LoginCard,
    Btn
  },
  mounted() {
    this.getRecommandTags();
    this.getRecommandChannels();
  },
  computed: {
    ...mapState([
      'userInfo',
      'recommandTagList',
      'recommandChannelList',
      'currentShort',
      'loginPageOn',
      'uploadShortPageOn',
      'shortPageOn'
    ])
  },
  methods: {
    ...mapMutations([
      'setLoginPageOn',
      'setUploadShortPageOn',
      'setShortPageOn'
    ]),
    ...mapActions([
      'requestLogout',
      'getRecommandTags',
      'getRecommandChannels',
      'requestSearch'
    ]),
    closeLogin() {
      this.setLoginPageOn(false);
    },
    openLogin() {
      this.setLoginPageOn(true);
    },
    closeUpload() {
      this.setUploadShortPageOn(false);
    },
    openUpload() {
      this.setUploadShortPageOn(true);
    },
    closeShort() {
      this.setShortPageOn(false);
    },
    search(content) {
      this.requestSearch(content);
    },
    logout() {
      this.requestLogout();
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
* {
  box-sizing:border-box;
}
body {
  padding:0;
  margin:0;
  width:100vw;
  height:100vh;
  overflow:hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position:absolute;
  height:100%;
  width:100%;
  color: #2c3e50;
}

header#nav {
  position:fixed;
  z-index:50;
  height:100px;
  width:100%;
  padding: 20px;
  border-bottom:1px solid #cccccc;
  .logo {
    width:40px;
    height:40px;
  }
}
main {
  position:relative;
  padding:100px 0 0 100px;
  display:flex;
  flex-direction:row;
  height:100%;
  width:100%;
}
aside {
  width:200px;
  background-color:var(--background-color);
}
.article {
  position:relative;
  height:100%;
  padding-bottom:200px;
  flex-grow:1;
  overflow-y:scroll;
  overflow-x:hidden;
}
</style>
