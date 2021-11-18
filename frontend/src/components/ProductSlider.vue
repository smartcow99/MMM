<template>
    <div class="product-slider">
        <button @click="showLeft">
            <font-awesome-icon icon="angle-left"/>
        </button>
        <div class="view-box">
            <span class="contents" :style="{ transform:`translateX(${-100*index}px)`}">
                <slot/>
            </span>
        </div>
        <button @click="showRight">
            <font-awesome-icon icon="angle-right"/>
        </button>
    </div>
</template>

<script>

export default {
    name:'ProductSlider',
    props: {
        'maxIndex':Number
    },
    data() {
        return {
            index:0
        }
    },
    methods: {
        showLeft() {
            if(this.index!=0) {
                this.index--;
            }
        },
        showRight() {
            if(this.index<this.maxIndex-3) {
                this.index++;
            }
        }
    }

}
</script>

<style scoped>
.product-slider {
    display:flex;
    flex-direction:row;
    justify-content: center;
    overflow:hidden;
}
.product-slider .view-box {
    display:block;
    width:300px;
    overflow:hidden;
}
.product-slider .view-box .contents {
    display:flex;
    width:1000px;
    flex-direction:row;
}
</style>