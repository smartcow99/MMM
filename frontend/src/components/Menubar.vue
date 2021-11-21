<template>
    <div class="menu-bar">
        <router-link 
            @click="saveSearchType('short')" 
            :to="{ path:'/search/', query:{ 'type':'short','content': $route.query['content']} }"
            :class="{selected:$store.state['searchType']==='short'}"
        >
            쇼츠
        </router-link> |
        <router-link 
            @click="saveSearchType('channel')" 
            :to="{ path:'/search/channels', query:{ 'type':'channel','content': $route.query['content']}}"
            :class="{selected:$store.state['searchType']==='channel'}"
        >
            채널
        </router-link> |
        <router-link 
            @click="saveSearchType('product')" 
            :to="{ path:'/search/products', query:{ 'type':'product','content': $route.query['content']}}"
            :class="{selected:$store.state['searchType']==='product'}"
        >
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

<style lang="scss" scoped>
.menu-bar {
    display:flex;
    flex-direction:row;
    a {
        font-size:1.2rem;
        font-weight: 800;
        text-align:center;
        margin:0 10px;
        &.selected {
            border-bottom:5px solid var(--primary-color);
        }
    }
}

</style>