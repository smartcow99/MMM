<template>
    <div id="dropzone"
        :class="{'overing':overing}"
        class="dropzone upload-box">
        <label for="file-upload"
            @dragenter="dragenterHandler($event)" 
            @dragleave="dragleaveHandler($event)" 
            @dragover.prevent
            @drop.prevent="dropHandler($event)">
            <img v-if="!!src" class="preview" :src="src"/>
            <span v-else class="guide">
                <font-awesome-icon class="icon" icon="upload"/>
                <div><slot/></div>
            </span>
        </label>
        <input id="file-upload" type="file" @change="fileUploadHandler"/>
    </div>
</template>

<script>
export default {
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
            console.log('enter')
        },
        dragleaveHandler(evt) {
            this.overing = false;
            console.log('leave')
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

<style scoped>
.upload-box {
    cursor:pointer;
    border:4px dashed var(--placeholder-color);
    border-radius:4px;
}
.dropzone:hover {
    background-color:var(--primary-color);
    opacity:0.7;
    color:var(--white-text-color);
}
.overing {
    background-color:var(--primary-color);
    opacity:0.7;
    color:var(--white-text-color);
}
.preview {
    width:100%;
    height:100%;
}
input[type='file'] {
    display:none;
}
label {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    cursor:pointer;
}
span.guide {
    pointer-events: none;
    text-align:center;
    display:flex;
    flex-direction:column;
}
span.guide .icon {
    font-size:2rem;
    margin:0 auto;
}
</style>