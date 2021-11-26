<template>
    <router-link :to="{path:makeUrl(searchType), query:{'type':searchType,'content':title} }">
        <button class="tag"># {{title}}</button>
    </router-link>
</template>

<script>
export default {
    name:'Tag',
    props: ['title'],
    computed: {
        searchType() {
            return this.$store.state['searchType'];
        }
    },
    methods: {
        makeUrl(type) {
            if(type==='short') return '/search/';
            else if(type==='channel') return '/search/channels';
            else if(type==='product') return '/search/products';
        }
    }
}
</script>

<style scoped>
.tag {
    height:26px;
    border:1px solid var(--placeholder-color);
    color:var(--placeholder-color);
    background-color:var(--background-color);
    border-radius: 13px;
    margin:3px;
    padding:0 12px;
    cursor: pointer ;
}
.tag:hover {
    border:1px solid var(--primary-color);
    color: var(--primary-color);
    /* background-color: var(--background-color-darken); */
}
</style>