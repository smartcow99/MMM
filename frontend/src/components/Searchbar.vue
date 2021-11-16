<template>
    <span class="search-bar">
        <input v-model="content"/>
        <button @click="search">
            <font-awesome-icon icon="search"/>
        </button>
    </span>
</template>

<script>
export default {
    data() {
        return {
            content:'',
        }
    },
    methods: {
        search() {
            this.$router.push({path:'/search',query:{'type':'shorts','content':this.content}})
        }
    }
}
</script>

<style>

</style>