<template>
    <div class="profile">
        <img v-if="userInfo['isLogined']" :src="userInfo['profileImage']"/>
        <img v-else src="@/assets/images/defaultProfile.png"/>
        <div v-if="userInfo['isLogined']" class="user-info">
            <h2>{{userInfo['name']}}</h2>
            <div class="button-zone">
                <router-link class="link" to='/mypage'>
                    <Btn class="button" theme="white">마이페이지</Btn>
                </router-link>
                <router-link class="link" :to="{ path:'/channel', query:{'channelId':userInfo['channelId']}}">
                    <Btn class="button" theme="primary">내 채널</Btn>
                </router-link>
            </div>
            <Btn class="button" theme="primary" @click="$emit('openUpload',$event)">업로드</Btn>
        </div>
        <div v-else>
            <Btn class="button" theme="primary" @click="$store.commit('setLoginPageOn',true)">로그인</Btn>
        </div>
    </div>
</template>

<script>
import Btn from './Btn.vue'
export default {
    components: { Btn },
    name: 'Profile',
    computed: {
        userInfo() {
            return this.$store.state['userInfo'];
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width:240px;
    height:240px;
}
.user-info {
    h2 {
        text-align:left;
    }
    .button-zone {
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        margin-bottom:10px;
        .link {
            width:110px;
        }
    }
}
.button {
        width:100%;
}
</style>