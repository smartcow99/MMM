<template>
    <div class="product-summary">
        <router-link :to="{name: 'Product', query: { productId: productInfo['productId'] }}">
            <img class="product-image" :src="productInfo.thumnail" alt="상품사진"/>
        </router-link>
        <div class="product-info">
            <router-link :to="{name: 'Product', query: { productId: productInfo['productId'] }}">
                <h2 class="product-name">{{productInfo.title}}</h2>
            </router-link>
            <h3 class="product-price">{{productInfo.price}} 원</h3>
            <div class="product-rate">
                <StarRating :rate="productInfo.rate"></StarRating>
                <small>({{productInfo.rate}})</small>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from './StarRating.vue'
export default {
    name:'ProductSummary',
    components: { StarRating },
    props: {
        'productInfo': Object
    }
}
</script>

<style lang="scss" scoped>
div.product-summary {
    border:1px solid var(--placeholder-color);
    border-radius:4px;
    & > a {
        overflow:hidden;
        img.product-image {
            display:inline-block;
            width:278px;
            height:280px;
        }
    }
}
div.product-info {
    padding:10px 20px;
    a {
        color:var(--primary-color);
        h2.product-name {
            text-align:left;
            font-size:1.2rem;
        }
    }
    div.product-rate {
        display:flex;
        flex-direction:row;
        small {
            margin-left:5px;
        }
    }
}
</style>