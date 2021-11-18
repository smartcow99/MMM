<template>
    <div class="profile">
        <img v-if="userInfo['isLogined']" :src="userInfo['profileImage']"/>
        <img v-else src="@/assets/images/defaultProfile.png"/>
        <div v-if="userInfo['isLogined']" class="user-info">
            <h2>{{userInfo['name']}}</h2>
            <router-link to='/mypage'>
                <Btn theme="white">마이페이지</Btn>
            </router-link>
            <router-link :to="{ path:'/channel', query:{'channelId':userInfo['channelId']}}">
                <Btn theme="primary">내 채널</Btn>
            </router-link>
            <Btn theme="primary" @click="$emit('openUpload',$event)">업로드</Btn>
        </div>
        <div v-else>
            <button @click="$store.commit('setLoginPageOn',true)">로그인</button>
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

<style>

</style>