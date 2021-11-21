<template>
    <button 
        :class="{
            'white':'white'===theme,
            'primary':'primary'===theme,
            'gray':'gray'===theme
        }"
    >
        <slot/>
    </button>
</template>

<script>
export default {
    props:{
        theme: {
            type: String,
            required: false,
            default:'primary',
            validator: (value)=> {
                return ['white','primary','gray'].indexOf(value) !== -1;
            }
        }
    }
}
</script>

<style scoped>
button {
    cursor:pointer;
    /* color:white; */
    border:transparent;
    border-radius: 4px;
    padding:10px 20px;
}

.white {
    border:1px solid black;
    background-color: var(--background-color);
    color:black;
}
.primary {
    background-color: var(--primary-color);
    color:white;
}
.gray {
    background-color: var(--placeholder-color)
}
</style>