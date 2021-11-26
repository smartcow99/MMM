<template>
    <router-link 
        class="product-mini"
        :to="{ path:'/product', query:{'productId':productId}}"
    >
        <img :src="img">
        <small>{{titleLengthLimit(title)}}</small>
    </router-link>
</template>

<script>
export default {
    name: 'ProductMini',
    props: {
        img: String,
        productId: Number,
        title: String
    },
    methods: {
        titleLengthLimit(title) {
            if(title.length>15) {
                return title.slice(0,15) + '...';
            }
            else {
                return title;
            }
        }
    }
}
</script>

<style scoped>
.product-mini {
    display:inline-block;
    width:100px;
    height:120px;
    display:flex;
    flex-direction:column;
}
.product-mini p {
    margin:0;
}
img {
    margin:0 auto;
    width:70px;
    height:70px;
}
</style>