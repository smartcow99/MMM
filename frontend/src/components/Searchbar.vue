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
    computed: {
        searchType() {
            return this.$store.state.searchType;
        }
    },
    methods: {
        search() {
            this.$router.push({path:`/search${this.getPath(this.searchType)}`,query:{'type':this.searchType,'content':this.content}})
        },
        getPath(type) {
            if(type==='channel') return '/channels';
            else if(type==='product') return '/products';
            else return '/';
        }
    },
    watch: {
        '$route'(to,from) {
            if(to.query['content']!=='') {
                this.content = to.query['content'];
            }
        }
    }
}
</script>

<style>

</style>