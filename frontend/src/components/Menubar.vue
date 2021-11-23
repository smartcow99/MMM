<template>
    <div class="menu-bar">
        <router-link 
            @click="saveSearchType('short')" 
            :to="{ path:'/search/', query:{ 'type':'short','content': $route.query['content']} }"
            :class="{selected:$store.state['searchType']==='short'}"
        >
            쇼츠
        </router-link>
        <span class="divider"></span>
        <router-link 
            @click="saveSearchType('channel')" 
            :to="{ path:'/search/channels', query:{ 'type':'channel','content': $route.query['content']}}"
            :class="{selected:$store.state['searchType']==='channel'}"
        >
            채널
        </router-link>
        <span class="divider"></span>
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
    margin-top:40px;
    display:flex;
    flex-direction:row;
    a {
        font-size:1.5rem;
        font-weight: 400;
        text-align:center;
        margin:0 15px;
        padding:5px 0;
        color: var(--text-color);
        &.selected {
            border-bottom:5px solid var(--primary-color);
        }
    }
}
span.divider {
    width:1px;
    height:20px;
    background-color:var(--text-color);
    margin:auto 0;
}
</style>