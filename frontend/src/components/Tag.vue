<template>
    <router-link :to="{path:'/search/', query:{'type':'short','content':title} }">
        <button class="tag"># {{title}}</button>
    </router-link>
</template>

<script>
export default {
    name:'Tag',
    props: {
        'title':String
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