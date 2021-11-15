<template>
    <div class="profile">
        <img :src="profileImage"/>
        <h2>{{nickname}}</h2>
        <router-link link='/mypage'>마이페이지</router-link>
        <router-link link='/channel'>내 채널</router-link>
        <button>업로드</button>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: {
        profileImage: String,
        nickname: String
    }
}
</script>

<style>

</style>