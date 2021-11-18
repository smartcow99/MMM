<template>
    <router-link :to="{path:'/search/', query:{'type':'short','content':title} }">
        <button class="tag"># {{title}}</button>
    </router-link>
</template>

<script>
export default {
    props: {
        'title':String
    }
}
</script>

<style>
.tag {
    border:1px solid var(--placeholder-color);
    color:var(--placeholder-color);
    background-color:var(--background-color);
}
.tag:hover {
    background-color: var(--background-color-darken);
}
</style>