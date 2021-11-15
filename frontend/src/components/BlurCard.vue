<template>
    <div id="blur-card" class="blur-card blur">
        <div id="blur-card-content">
            <slot />
            <button class="close" @click="$emit('close',$event)">
                <font-awesome-icon icon="times"/>
            </button>
        </div>

    </div>
</template>

<script>
export default {
    emits: [
        'close'
    ],
    data() {
        return {
            width:0,
            height:0,
        }
    },
    mounted() {
        const el = document.getElementById('blur-card-content');
        this.width = el.clientWidth;
        this.height = el.clientHeight;
        el.style.marginLeft = `-${this.width/2}px`
        el.style.marginTop = `-${this.height/2}px`
    }
}
</script>

<style scoped>
.blur {
    position:fixed;
    display:flex;
    flex-direction:row;
    left:0;
    top:0;
    width:100%;
    height:100%;
    backdrop-filter:blur(4px);
}
#blur-card-content {
    position:absolute;
    display:flex;
    flex-direction:row;
    left:50%;
    top:50%;
}
.close {
    position:relative;
    width:50px;
    height:50px;
}
</style>