<template>
    <div>
        <h2>{{PurchaseInfo['title']}}</h2>
        <img :src="PurchaseInfo['thumnail']" alt="구매상품사진"/>
        <span>결재 금액</span>{{PurchaseInfo['price']}}
        <span>구매 날짜</span>{{PurchaseInfo['date']}}
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

<style>

</style>