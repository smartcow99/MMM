<template>
    <div>
        shorts search
        <ShortSummary 
            v-for="(value,index) in shortList" 
            :key="index" 
            :shortInfo="value"
        />
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
    mounted() {
        if(!!this.$route.query['content']) {
            this.requestSearch({
                'type':'short',
                'content':this.$route.query
            });
        }
        else {
            this.getRecommandShorts();
        }
        
    },
    computed: {
        ...mapState([
            'shortList'
        ])
    },
    methods: {
        ...mapActions([
            'getRecommandShorts',
            'requestSearch'
        ])
    }
}
</script>

<style>

</style>

