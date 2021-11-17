<template>
    <div class="menu-bar">
        <router-link @click="saveSearchType('short')" :to="{ path:'/search/', query:{ 'type':'short','content': $route.query['content']} }">
            쇼츠
        </router-link> |
        <router-link @click="saveSearchType('channel')" :to="{ path:'/search/channels', query:{ 'type':'channel','content': $route.query['content']}}">
            채널
        </router-link> |
        <router-link @click="saveSearchType('product')" :to="{ path:'/search/products', query:{ 'type':'product','content': $route.query['content']}}">
            상품
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Menubar',
    methods: {
        saveSearchType(type) {
            this.$store.commit('setSearchType',type);
        }
    }
}
</script>

<style>

</style>