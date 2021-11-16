<template>
    <div id="dropzone"
        :class="{'overing':overing}"
        @dragenter="dragenterHandler($event)" 
        @dragleave="dragleaveHandler($event)" 
        @dragover.prevent
        @drop.prevent="dropHandler($event)"
        class="dropzone upload-box">
        <label for="file-upload">
            <img v-if="!!src"  class="preview" :src="src"/>
            <span v-else class="guide">
                <font-awesome-icon icon="upload"/>
                <div>{{explain}}</div>
            </span>
        </label>
        <input id="file-upload" type="file" @change="fileUploadHandler"/>
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
        fileUploadHandler(evt) {
            const files = evt.target.files;
            
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
.preview {
    width:300px;
    height:400px;
}
input[type='file'] {
    display:none;
}
</style>