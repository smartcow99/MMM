<template>
    <div class="image-viewer">
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
.image-viewer {
    height:380px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
}

.current-image {
    width:300px;
    height:300px;
    margin:0 auto;
}
.preview {
    width:300px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    margin:0 auto;
}
.preview-image {
    box-sizing:content-box;
    width:50px;
    height:50px;
    border:3px solid var(--background-color);
}
.preview-image:hover {
    border:3px solid var(--placeholder-color);
}
</style>