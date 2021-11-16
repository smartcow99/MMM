<template>
    구매내역
    <Bill
        v-for="(value,index) in purchaseList" 
        :key="index"
        :PurchaseInfo="value"
    />
</template>

<script>
import Bill from '../components/Bill.vue'
import {mapState,mapActions} from 'vuex'
export default {
    components: { Bill },
    mounted() {
        this.requestPurchaseList();
    },
    computed: {
        ...mapState([
            'purchaseList'
        ])
    },
    methods: {
        ...mapActions([
            'requestPurchaseList'
        ])
    }
}
</script>

<style>

</style>