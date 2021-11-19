<template>
    <div>
        product search result
        <ProductSummary 
            v-for="(value,index) in productList" 
            :key="index" 
            :productInfo="value"
        />
    </div>
</template>

<script>
import ProductSummary from '../components/ProductSummary.vue'
import {mapState,mapActions} from 'vuex'
export default {
    name: 'ProductSearch',
    components: { ProductSummary },
    computed: {
        ...mapState([
            'productList'
        ])
    },
    methods: {
        ...mapActions([
            'requestSearch',
        ])
    },
    watch: {
        '$route': {
            immediate: true,
            handler(to,from) {
                this.requestSearch({
                    'type':'product',
                    'content':this.$route.query
                });
            }
        }
    }
}
</script>

<style>

</style> 
