<template>
    <span class="delete-box">
        <slot/>
        <button class="delete-button" @click="$emit('delete')">x</button>
    </span>

</template>

<script>
export default {

}
</script>

<style>
.delete-box {
    position:relative;
}
.delete-button {
    position:absolute;
    top:0;
    height:20px;
    width:20px;
    border-radius:50%;
    left:100%;
    margin-left:-10px;
    margin-top:-10px;
    z-index:10;
}
</style>