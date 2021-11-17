<template>
    <div class="product-summary">
        <router-link :to="{name: 'Product', query: { productId: productInfo['productId'] }}">
            <img :src="productInfo.thumnail" alt="상품사진"/>
            <h2>{{productInfo.title}}</h2>
            <h3>{{productInfo.price}}</h3>
            {{productInfo.rate}}
            <StarRating :rate="productInfo.rate"></StarRating>
        </router-link>
    </div>
</template>

<script>
import StarRating from './StarRating.vue'
export default {
  components: { StarRating },
    name:'ProductSummary',
    props: {
        'productInfo': Object
    }
}
</script>

<style>
.product-summary {
    border:1px solid #cccccc;
}
</style>