<template>
    <div>
        <video :src="url"/>
    </div>
</template>

<script>
export default {
    name:'ShortVideo',
    props: {
        url:String
    }
}
</script>

<style>

</style>