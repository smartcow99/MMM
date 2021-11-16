<template>
    <div>
        product search
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
    mounted() {
        this.requestProductList();
    },
    computed: {
        ...mapState([
            'productList'
        ])
    },
    methods: {
        ...mapActions([
            'requestProductList'
        ])
    }
}
</script>

<style>

</style> 
