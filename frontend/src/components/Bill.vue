<template>
    <div class="purchase-element">
        <img :src="PurchaseInfo['thumnail']" alt="구매상품사진"/>
        <div class="purchase-info">
            <h2>{{this.PurchaseInfo.productName}}</h2>
            <div class="purchase-price">
                <span>결제 금액</span>&nbsp;&nbsp;{{PurchaseInfo['price']}}
            </div>
            <div class="purchase-date">
                <span>구매 날짜</span>&nbsp;&nbsp;{{simplifyPurchaseDate(PurchaseInfo['date'])}}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'Bill',
    props: {
        'PurchaseInfo': Object
    },
    methods:{
        simplifyPurchaseDate(dateString){
            return dateString.substring(0,10);
        }
    },
}
</script>

<style lang="scss" scoped>
img{
    width:170px;
    height:170px;
}
h2{
    margin: 0;
    font-size:1.2rem;
}
.purchase-element{
    width: 550px;
    height:180px;
    border :1px solid var(--placeholder-color);
    border-radius: 4px;
    margin-bottom:30px;
    display:flex;
    flex-direction: row;
}
.purchase-info{
    flex-grow:1;
    padding:10px 20px;
    height:180px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
        margin-bottom:10px;
    }
}
</style>