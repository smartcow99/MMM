<template>
    <div class="purchase-element">
        <img :src="PurchaseInfo['thumnail']" alt="구매상품사진"/>
        <div class="purchase-info">
            <h2>{{PurchaseInfo['title']}}</h2>
            <div class="purchase-price">
                <span>결재 금액</span>&nbsp;&nbsp;{{PurchaseInfo['price']}}
            </div>
            <div class="purchase-date">
                <span>구매 날짜</span>&nbsp;&nbsp;{{PurchaseInfo['date']}}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'Bill',
    props: {
        'PurchaseInfo': Object
    }
}
</script>

<style scoped>
img{
    width:170px;
    height:170px;
}
h2{
    margin: 0;
}
.purchase-element{
    width: 550px;
    height:180px;
    border :1px solid var(--placeholder-color);
    border-radius: 4px;
    margin-left: 25px;
    margin-top: 20px;
    display:flex;
    flex-direction: row;
}
.purchase-info{
    height:180px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
}
.purchase-date{
    margin-top: 90px;
}
</style>