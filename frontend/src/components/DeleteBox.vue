<template>
    <span class="delete-box">
        <slot/>
        <img class="delete-button" src="@/assets/images/delete.png" @click="$emit('delete')"/>
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
    border:none;
    position:absolute;
    top:0;
    height:20px;
    width:20px;
    border-radius:50%;
    left:100%;
    margin-left:-10px;
    margin-top:-10px;
    z-index:10;
    cursor:pointer;
}
.delete-button:hover {
    animation:shake 1s infinite;
}
@keyframes shake {
    0% {
        transform:rotate(0deg);
    }
    5% {
        transform:rotate(10deg);
    }
    10% {
        transform:rotate(0deg);
    }
    15% {
        transform:rotate(-10deg);
    }
    20% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(0deg);
    }
}
</style>