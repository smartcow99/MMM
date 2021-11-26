<template>
    <div id="short-search">
        <h2 class="search-text">'{{$route.query['content']}}' 검색 결과</h2>
        <div class="short-list" v-show="shortList.length>0">
            <ShortSummary 
                class="item"
                v-for="(value,index) in shortList" 
                :key="index" 
                :shortInfo="value"
            />
        </div>
        <div class="loading-guide" v-if="isSearchLoading==='loading'">
            <font-awesome-icon class="loading icon" icon='spinner' spin/>
            <div class="space"></div>
            <p class="guide-text">loading</p>
        </div>
        <div class="loading-guide" v-else-if="isSearchLoading==='end'">
            <p>더 이상 불러올 컨텐츠가 없습니다.</p>
        </div>
        <div class="short-list" v-show="shortList.length===0">
            <b>결과 없음</b>
        </div>
    </div>
</template>

<script>
import ShortSummary from '../components/ShortSummary.vue'
import {mapState,mapActions} from 'vuex'
export default {
    //$route의 params확인해서 검색요청에 따른 shortList 요청 만들 것
    name: 'ShortSearch',
    components: { ShortSummary },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([
            'shortList',
            'isSearchLoading'
        ])
    },
}
</script>

<style scoped>
div.short-list{
    margin-top:20px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
}
.item {
    margin-right:40px;
    margin-bottom:100px;
}
</style>

