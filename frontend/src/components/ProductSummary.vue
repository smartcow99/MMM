<template>
    <div>
        <router-link :to="{name: 'Product', query: { productId: productInfo['productId'] }}">
            product summary
            상품사진
            상품이름
            가격
            별점
        </router-link>
    </div>
</template>

<script>
export default {
    name:'ProductSummary',
    props: {
        'productInfo': Object
    }
}
</script>

<style>

</style>