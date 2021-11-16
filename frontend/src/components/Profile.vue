<template>
    <div class="profile">
        <img v-if="userInfo['isLogined']" :src="userInfo['profileImage']"/>
        <img v-else src="@/assets/images/defaultProfile.png"/>
        <div v-if="userInfo['isLogined']" class="user-info">
            <h2>{{userInfo['nickname']}}</h2>
            <router-link to='/mypage'>마이페이지</router-link>
            <router-link to='/channel'>내 채널</router-link>
            <button @click="$emit('openUpload',$event)">업로드</button>
        </div>
        <div v-else>
            <button @click="$emit('openLogin',$event)">로그인</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: {
        'userInfo': Object,// isLogined: boolean, 
    }
}
</script>

<style>

</style>