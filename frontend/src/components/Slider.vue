<template>
    <div class="slider">
        <button @click="showLeft">
            <font-awesome-icon icon="angle-left"/>
        </button>
        <div class="view-box" :style="{ 'width':`${count*elWidth}px`}">
            <span class="contents" :style="{ transform:`translateX(-${elWidth*index}px)`}">
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
    name:'Slider',
    props: {
        'elWidth':Number,
        'count':Number,
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
            if(this.index<this.maxIndex-this.count) {
                this.index++;
            }
        }
    }

}
</script>

<style scoped>
.slider {
    display:flex;
    flex-direction:row;
    justify-content: center;
    overflow:hidden;
}
.slider .view-box {
    display:block;
    width:300px;
    overflow:hidden;
}
.slider .view-box .contents {
    display:flex;
    width:1000px;
    flex-direction:row;
}
</style>