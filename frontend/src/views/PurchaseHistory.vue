<template>
<div class="bill-box">
    <Bill
        v-for="(value,index) in purchaseList" 
        :key="index"
        :PurchaseInfo="value"
    />
</div>
</template>

<script>
import Bill from '../components/Bill.vue'
import {mapState,mapActions} from 'vuex'
export default { // 스크롤 내림에 따라 추가 list 요청도 만드세용
    name:'PurchaseHistory', 
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

<style scoped>

.bill-box{
    width:600px;
    border-radius: 4px;
    margin-top:40px;
    padding:0 0 20px 0;
}
</style>