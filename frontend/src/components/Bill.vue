<template>
    <div>
        {{PurchaseInfo}}
        상품명
        가격
        
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