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
*{
    cursor:pointer;
    color:white;
    border:transparent;
    border-radius: 4px;
}
.white {
    background-color: var(--background-color);
}
.primary {
    background-color: var(--primary-color);
}
.gray {
    background-color: var(--placeholder-color)
}
</style>