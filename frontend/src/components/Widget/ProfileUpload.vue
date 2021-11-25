<template>
    <div class="profile-change-card">
        <h1>프로필 사진 변경</h1>
        <div id="upload-area">
        <UploadBox id="upload-box">
            <p>사진 등록하기</p>
        </UploadBox>
        </div>
        <Btn id="change-button" @click="changeProfile">변경하기</Btn>
    </div>
</template>

<script>
import UploadBox from '@/components/UploadBox.vue'
import Btn from '@/components/Btn.vue'
export default {
    components:{
        UploadBox,
        Btn,
    },
    methods:{
        changeProfile(){
            alert("데모 버전에서는 바꿀 수 없습니다.");
        }
    }

}
</script>

<style scoped>
*{
    font-family: 'rubik';
    font-size:14px;
}
h1{
    font-size:50px;
    margin:70px 0 70px 0;
}
.profile-change-card{
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height:600px;
    border-radius:4px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    background-color:#FFFFFF;
}
#upload-area{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
#upload-box{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:500px;
    height:200px;
}
#change-button{
    margin:100px 0 0 0;
    width:500px;
    height:40px;
}
</style>