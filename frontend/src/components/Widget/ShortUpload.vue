<template>
   <div class="uploadCard">
       <span class="uploadArea">
                <div id="uploadShorts">
                    <UploadBox/>
                    <font-awesome-icon icon="upload"/>
                    shorts 드래그하세요<br>
                    (영상 제한 50MB)
                </div>
                <div id="uploadThumbnail">
                <UploadBox />
                    <font-awesome-icon icon="upload"/>
                    썸네일 드래그하세요<br>
                    (이미지 제한 5MB)
                </div>
       </span>

       <div class="shortsInfo">
            <span id="titleBox">
               <span id="title">제목</span>
               <input type="text" placeholder="제목입력" v-model="inputTitle">
            </span>
            <span id="explanationBox">
               <span id="explanation">영상 설명</span>
               <input id="short-explain" type="text" placeholder="영상설명" v-model="inputExplanation">
            </span>
            <span id="tagBox">
                <span id="tag">태그</span>
                <input type="text" placeholder="태그입력(Enter로 추가)" v-model="inputTag" @keyup.enter="addTag">
            </span>
            <TagList v-if="tagOn" :tagList="tagList"/>
       </div>
       <Btn id="upload-button" @click="clickUploadButton">upload</Btn>
   </div>
</template>

<script>
import Btn from '@/components/Btn.vue';
import TagList from '@/components/TagList.vue';
import UploadBox from '@/components/UploadBox.vue'
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    data:{
        inputTitle:'',
        inputExplanation:'',
        inputTag:'',
    },
    data(){
        return{
            tagOn:false,
        }
    },
    computed:{
        ...mapState([
            'tagList',
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
        console.log(this.tagList),
        this.tagOn=true;
        this.addTagList(this.inputTag);
        
    },
    clickUploadButton(){
       this.requestUpload([this.userInfo.userId, this.inputTitle, this.inputExplanation, this.tagList]); 
       this.resetTagList();
       this.$parent.$emit('close',true);
    }
},

components:{
    Btn,
    TagList,
    UploadBox,
},


}
</script>

<style scoped>
*{
    font-family: 'rubik';
    font-size : 14px;
}
.uploadCard{
    /* display:flex;
    flex-direction: column; */
    /* justify-content: space-between; */
    margin:200px auto;
    width:700px;
    height:750px;
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
#uploadShorts{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:48%;
    height:300px;
    border:dashed;
}
#uploadThumbnail{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:48%;
    height:300px;
    border:dashed;
}
.shortsInfo{
    /* display:flex;
    flex-direction: column; 
     align-items: center; 
     justify-content: space-between; 
     margin:50px auto; */
 }

input{
    width:85%;
    height:40px;
    margin:20px 0 0 0;
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
div>span>span{
    margin:10px;
}
#short-explain{
    height:150px;
}
#upload-button{
    width:100%;
    height: 40px;
    margin: 90px auto;
    cursor:pointer;
}
</style>