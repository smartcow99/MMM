<template>
    <div id="dropzone"
        :class="{'overing':overing}"
        @dragenter="dragenterHandler($event)" 
        @dragleave="dragleaveHandler($event)" 
        @dragover.prevent
        @drop.prevent="dropHandler($event)"
        @click="clickHandler($event)"
        class="dropzone upload-box">
        <img v-if="!!src" :src="src"/>
        <span v-else class="guide">
            <font-awesome-icon icon="upload"/>
            <div>{{explain}}</div>
        </span>
    </div>
</template>

<script>
//todo: 이미지 드래그해서 hover시 애니메이션, 
export default {
    props: {
        explain:String
    },
    data() {
        return {
            file: null,
            overing: false,
            reader: new FileReader(),
            src:''
        }
    },
    mounted() {
        this.reader.addEventListener('load',()=>{
            this.src = this.reader.result;
        },false)  
    },
    methods: {
        dragenterHandler(evt) {
            this.overing = true;
        },
        dragleaveHandler(evt) {
            this.overing = false;
        },
        dropHandler(evt) {
            this.overing = false;
            const files = evt.dataTransfer.files;
            if(files.length>1) {
                alert('한 장의 사진만 올려주세요.')
            }
            else {
                const file = files[0];
                if(!/^image\//.test(file.type)) {
                    alert('이미지 파일만 가능합니다.')
                }
                else {
                    this.reader.readAsDataURL(file);
                    this.$emit('upload',file);
                }
            }
        },
        clickHandler(evt) {
            alert('click')
        }
    }
}
</script>

<style>
.upload-box {
    border:1px dashed var(--placeholder-color);
}
.overing {
    background-color:var(--primary-color);
    opacity:0.7;
    color:var(--white-text-color);
}
</style>