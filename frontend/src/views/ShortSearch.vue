<template>
    <div>
        <div id="shortList">
            <ShortSummary 
                v-for="(value,index) in shortList" 
                :key="index" 
                :shortInfo="value"
            />
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
    methods: {
        ...mapActions([
            'requestSearch'
        ])
    },
    watch: {
        '$route': {
            immediate: true,
            handler(to,from) {
                this.requestSearch({
                    'type':'short',
                    'content':this.$route.query
                });
            }
        }
    }
}
</script>

<style>
#shortList{
    margin-top:20px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
}
</style>

