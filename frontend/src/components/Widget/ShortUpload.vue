<template>
   <div class="uploadCard">
       <span class="uploadArea">
                <div id="uploadShorts">
                    <font-awesome-icon icon="upload"/>
                    shorts 드래그하세요<br>
                    (영상 제한 50MB)
                </div>
                <div id="uploadThumbnail">
                    <font-awesome-icon icon="upload"/>
                    썸네일 드래그하세요<br>
                    (이미지 제한 5MB)
                </div>
       </span>

       <div class="shortsInfo">
           <span id="title">제목<input type="text" placeholder="제목입력"></span>
           <span id="info">영상 설명<input type="text" placeholder="영상설명" id="short-explain"></span>
           <span id="tag">태그<input type="text" placeholder="태그입력(Enter로 추가)"></span>
       </div>
       <Btn id="upload-button">upload</Btn>
   </div>
</template>

<script>
import Btn from '@/components/Btn.vue';

export default {
components:{
    Btn,
}

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
    display:flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    margin:50px auto;
 }

input{
    width:85%;
    height:40px;
    margin:10px auto;
}
div>span{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
#short-explain{
    height:150px;
}
#upload-button{
    width:100%;
    height: 40px;
    /* margin:50px auto; */
    cursor:pointer;
}
</style>