<template>
    <div>
        {{$route.query['productId']}}
        상품사진
        상품정보
        상품상세설명
        관련 shorts
        댓글
    </div>
</template>

<script>
export default {
    name:'Product',
    mounted() {
        console.log(this.$route)
    }
}
</script>

<style>

</style>