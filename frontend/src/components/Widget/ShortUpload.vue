<template>
    <div class="uploadCard">
        <span class="uploadArea">
                <div>
                    <UploadBox id="uploadShorts">
                    <p>shorts 드래그하세요</p>
                    <small>(영상 제한 50MB)</small>
                    
                    </UploadBox>
                </div>
                <div>
                <UploadBox id="uploadThumbnail">
                    <p>썸네일 드래그하세요</p>
                    <small>(이미지 제한 5MB)</small>
                </UploadBox>
                </div>
        </span>

        <div class="shortsInfo">
            <span id="titleBox">
                <span id="title">제목</span>
                <input type="text" placeholder="제목입력" v-model="inputTitle">
            </span>
            <span id="explanationBox">
                <span id="explanation">영상 설명</span>
                <textarea id="short-explain" type="text" placeholder="영상설명" v-model="inputExplanation"/>
            </span>
            <span id="tagBox">
                <span id="tag">태그</span>
                <input type="text" placeholder="태그입력(Enter로 추가)" v-model="inputTag" @keyup.enter="addTag">
            </span>
            <div id="tag-area">
                <Tag 
                    v-for="(value,index) in tagList" :key="index"
                    :title="value"
                    @delete="deleteTag"
                />
            </div>
            <Btn id="upload-button" @click="clickUploadButton">upload</Btn>
        </div>
        
    </div>
</template>

<script>
import Btn from '@/components/Btn.vue';
import Tag from '@/components/TagDeletable.vue';
import UploadBox from '@/components/UploadBox.vue'
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    data(){
        return{
            tagOn:false,
            inputTitle:'',
            inputExplanation:'',
            inputTag:'',
            tagList:[]
        }
    },
    computed:{
        ...mapState([,
            'userInfo'
        ]),
    },
methods:{
    ...mapActions([
        'addTagList',
        'resetTagList',
        'requestUpload'
    ]),
    
    addTag(){
        this.tagList.push(this.inputTag+'');
        this.inputTag="";
    },
    deleteTag(){
        this.tagList.pop();
    },
    clickUploadButton(){
        alert('데모 계정에선 영상을 업로드할 수 없습니다.')
    }
},

components:{
    Btn,
    Tag,
    UploadBox,
},


}
</script>

<style scoped>
*{
    font-family: 'rubik';
    font-size : 14px;
}
p{
    margin: 10px 0 0 0;
}
.uploadCard{
    width:700px;
    height:800px;
    padding:50px;
    border-radius:4px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    background-color:#FFFFFF;
}
.uploadArea{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    margin:0 0 20px 0;
}
#uploadShorts,#uploadThumbnail{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:280px;
    height:280px;
}
/* .shortsInfo{
    display:flex;
    flex-direction: column; 
     align-items: center; 
     justify-content: space-between; 
     margin:50px auto;
 } */
.shortsInfo {
    position:relative;
    height:430px;
}
#titleBox{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
#explanationBox{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
#tagBox{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
input{
    width:500px;
    height:40px;
    padding:10px;
    border: 2px solid var(--placeholder-color);
    border-radius:4px;
}
textarea#short-explain{
    padding:10px;
    width:500px;
    height:150px;
    resize:none;
    border: 2px solid var(--placeholder-color);
    border-radius:4px;
}
input:focus,textarea#short-explain:focus {
    transition:0.3s;
    outline: none;
    border:2px solid var(--primary-color);
}
#titleBox,#explanationBox,#tagBox {
    margin-top:20px;
}
#tag-area {
    margin-top:10px;
    margin-left:100px;
    width:500px;
    max-height:100px;
    overflow-y:auto;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
}
#upload-button{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height: 40px;
    cursor:pointer;
}
</style>