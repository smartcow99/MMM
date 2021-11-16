<template>
    <button class="tag"># <slot/></button>
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
    border:1px solid var(--placeholder-color);
    color:var(--placeholder-color);
    background-color:var(--background-color);
}
.tag:hover {
    background-color: var(--background-color-darken);
}
</style>