<template>
    <div>
        <router-link to="/mypage/">마이페이지</router-link> |
        <router-link to="/mypage/purchase-history">구매 내역</router-link> |
        <router-view/>
    </div>
</template>

<script>
export default {
    name:'Mypage'
}
</script>

<style>

</style>