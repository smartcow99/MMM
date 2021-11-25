<template>
    <div id="short-search">
        <h2 class="search-text">'{{$route.query['content']}}' 검색 결과</h2>
        <div class="short-list" v-show="shortList.length>0">
            <ShortSummary 
                v-for="(value,index) in shortList" 
                :key="index" 
                :shortInfo="value"
            />
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
            'shortList'
        ])
    },
}
</script>

<style>
div.short-list{
    margin-top:20px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
}
</style>

