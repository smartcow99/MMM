<template>
    <div>
        <img class="current-image" :src="imageList[index]"/>
        <div class="preview">
            <img
                class="preview-image"
                v-for="(image,index) in imageList"
                @mouseover="viewImage(index)"
                :key="index"
                :src="image"/>
        </div>
    </div>
</template>

<script>
export default {
    name:'ImageViewer',
    props: {
        'imageList':Array
    },
    data() {
        return {
            index: 0,
        }
    },
    methods: {
        viewImage(index){
            this.index=index;
        }
    }
}
</script>

<style scoped>
.current-image {
    width:300px;
    height:300px;
}
.preview {
    display:flex;
    flex-direction:row;
}
.preview-image {
    width:50px;
    height:50px;
}
</style>