<template>
    <div class="write-review-card">
        <h1>나의 사용 후기</h1>
        <div class="star-point-area">
            <font-awesome-icon class="icon" @click="oneStar" @mouseenter="oneStarHover" :icon="[this.tempRate>0?'fas':'far','star']"/>
            <font-awesome-icon class="icon" @click="twoStar" @mouseenter="twoStarHover" :icon="[this.tempRate>1?'fas':'far','star']"/>
            <font-awesome-icon class="icon" @click="threeStar" @mouseenter="threeStarHover" :icon="[this.tempRate>2?'fas':'far','star']"/>
            <font-awesome-icon class="icon" @click="fourStar" @mouseenter="fourStarHover" :icon="[this.tempRate>3?'fas':'far','star']"/>
            <font-awesome-icon class="icon" @click="fiveStar" @mouseenter="fiveStarHover" :icon="[this.tempRate>4?'fas':'far','star']"/>
        </div>
        <div class="write-review-area">
            <p>사용해본 경험은 어떠셨나요?</p>
            <textarea id="write-review-box" placeholder="사용경험을 자세히 알려주세요. (발림성, 색조 등등. 300자 제한)" />
        </div>
        <div class="upload-picture-area">
            <p>사진 첨부</p>
            <UploadBox id="upload-box">
                <p>사진 등록하기</p>
            </UploadBox>
        </div>
        <Btn id="register-review-button" @click="registerReview">댓글 등록하기</Btn>
    </div>
</template>

<script>
import Btn from '@/components/Btn.vue';
import UploadBox from '@/components/UploadBox.vue';
export default {
    data(){
        return{
            rate:-1,
            tempRate:0,
        }
    },
    methods:{
        registerReview(){
            alert("데모 버전에선 안돼용~")
        },
        oneStar(){
            this.rate=1;
            this.tempRate=1;
        },
        twoStar(){
            this.rate=2;
            this.tempRate=2;
        },
        threeStar(){
            this.rate=3;
            this.tempRate=3;
        },
        fourStar(){
            this.rate=4;
            this.tempRate=4;
        },
        fiveStar(){
            this.rate=5;
            this.tempRate=5;
        },
        oneStarHover() {
            if(this.rate===-1)
                this.tempRate=1;
        },
        twoStarHover() {
            if(this.rate===-1)
                this.tempRate=2;
        },
        threeStarHover() {
            if(this.rate===-1)
                this.tempRate=3;
        },
        fourStarHover() {
            if(this.rate===-1)
                this.tempRate=4;
        },
        fiveStarHover() {
            if(this.rate===-1)
                this.tempRate=5;
        }

    },
    components:{
        Btn,
        UploadBox,
    }
}
</script>

<style scoped>
*{
    font-family:'rubik';
    font-size:14px;
}
h1{
    font-size:40px;
    margin-bottom:50px;
}
p{
    font-weight: bold;
    margin: 20px 0 0 0;
}
.star-point-area{
    margin-bottom: 50px;
}
.star-point-area div{
    /* display:inline; */
    border:1px solid black;
    width:20px;
    height: 40px;
}

.write-review-card{
    display:flex;
    flex-direction: column;
    align-items: center;
    width:500px;
    height:700px;
    border-radius:4px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    background-color:#FFFFFF;
}
.write-review-area{
    display:flex;
    flex-direction: column;
    align-items: flex-start;

}
#write-review-box{
    margin-top: 5px;
}
textarea{
    width:400px;
    height:150px;
}
.upload-picture-area{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
}
#upload-box{
    display: flex;
    flex-direction:column;
    justify-content: center;
    width:400px;
    height:150px;
    margin-top:5px;
}
#register-review-button{
    width:400px;
    height:40px;
    margin:20px 0 0 0;
}
div.star-point-area {
    position:relative;
}
div.star-hover {
    position:absolute;
    display:flex;
    flex-direction:row;
    width:200px;
}
div.stars {
    display:flex;
    flex-direction:row;
    width:210px;
}
div.star-point-area .icon {
    font-size:3rem;
    color:gold;
    cursor:pointer;
}
div.hover-zone {
    width:21px;
    height:40px;
}
</style>