<template>
    <span id="search-bar">
        <input class="search-input" v-model="content" placeholder="검색" @keyup.enter="search"/>
        <Btn class="search-button" theme="primary" @click="search">
            <font-awesome-icon class="icon" icon="search"/>
        </Btn>
    </span>
</template>

<script>
import Btn from './Btn.vue';
export default {
    name: 'SearchBar',
    components : {Btn},
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

<style lang="scss" scoped>
#search-bar {
    .search-input {
        line-height:24px;
        width:300px;
        font-size:1rem;
        border-radius:20px;
        padding:7px 20px;
        margin-right:10px;
        border: 1px solid var(--placeholder-color);
        &:focus {
            outline: none;
        }   
    }
    .search-button {
        width:80px;
        height:40px;
        border-radius:20px;
        & > .icon {
            font-size:1rem;
        }
    }
}
</style>
