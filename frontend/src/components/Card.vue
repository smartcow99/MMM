<template>
    <div class="slot">
        <div>몰?루</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style>
.slot {
    border:4px;
    background-color:white;
}
</style>