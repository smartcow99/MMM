<template>
    <span class="tag"># {{title}}</span>
</template>

<script>
export default {
    props: {
        'title':String
    }
}
</script>

<style>
.tag {
    border:1px solid #CCCCCC;
    color:#CCCCCC;
    background-color:#FFFFFF;
}
</style>