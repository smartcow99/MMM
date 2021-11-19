<template>
    <router-link 
        class="product-mini"
        :to="{ path:'/product', query:{'productId':productId}}"
    >
        <img :src="img">
        <p>{{title}}</p>
    </router-link>
</template>

<script>
export default {
    props: {
        img: String,
        productId: String,
        title: String
    }
}
</script>

<style scoped>
.product-mini {
    display:inline-block;
    width:100px;
    height:100px;
}
.product-mini p {
    margin:0;
}
</style>