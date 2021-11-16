<template>
    <router-link 
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

<style>

</style>