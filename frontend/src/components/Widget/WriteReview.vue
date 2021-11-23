<template>
    <div class="write-review-card">
        <h1>나의 사용 후기</h1>
        
        <div v-if="ratedOn" class="star-point-area">
            <div>
                <spna class="hover-zone" @click="halfStar"></spna>
                <spna class="hover-zone" @click="oneStar"></spna>
                <spna class="hover-zone" @click="oneHalfStar"></spna>
                <spna class="hover-zone" @click="twoStar"></spna>
                <spna class="hover-zone" @click="twoHalfStar"></spna>
                <spna class="hover-zone" @click="threeStar"></spna>
                <spna class="hover-zone" @click="threeHalfStar"></spna>
                <spna class="hover-zone" @click="fourStar"></spna>
                <spna class="hover-zone" @click="fourHalfStar"></spna>
                <spna class="hover-zone" @click="fiveStar"></spna>
            </div>
            <span v-if="rate<0.5">
                <font-awesome-icon id="inner-star" @click="halfStar" :icon="['far','star-half']"/>
                <font-awesome-icon id="outer-star" @click="oneStar" :icon="['far','star']"/>
                <font-awesome-icon id="inner-star" @click="oneHalfStar" :icon="['far','star-half']"/>
                <font-awesome-icon id="outer-star" @click="twoStar" :icon="['far','star']"/>
                <font-awesome-icon id="inner-star" @click="twoHalfStar" :icon="['far','star-half']"/>
                <font-awesome-icon id="outer-star" @click="threeStar" :icon="['far','star']"/>
                <font-awesome-icon id="inner-star" @click="threeHalfStar" :icon="['far','star-half']"/>
                <font-awesome-icon id="outer-star" @click="fourStar" :icon="['far','star']"/>
                <font-awesome-icon id="inner-star" @click="fourHalfStar" :icon="['far','star-half']"/>
                <font-awesome-icon id="outer-star" @click="fiveStar" :icon="['far','star']"/>
            </span>
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
        'rate':Number,
        ratedOn:false,
        }
    },
    methods:{
        registerReview(){
            alert("데모 버전에선 안돼용~")
        },
        halfStar(){
            this.rate=0.5;
            this.ratedOn=true;
        },
        oneStar(){
            this.rate=1;
            this.ratedOn=true;
        },
        oneHalfStar(){
            this.rate=1.5;
            this.ratedOn=true;
        },
        twoStar(){
            this.rate=2;
            this.ratedOn=true;
        },
        twoHalfStar(){
            this.rate=2.5;
            this.ratedOn=true;
        },
        threeStar(){
            this.rate=3;
            this.ratedOn=true;
        },
        threeHalfStar(){
            this.rate=3.5;
            this.ratedOn=true;
        },
        fourStar(){
            this.rate=4;
            this.ratedOn=true;
        },
        fourHalfStar(){
            this.rate=4.5;
            this.ratedOn=true;
        },
        fiveStar(){
            this.rate=5;
            this.ratedOn=true;
        },

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
    margin:30px 0 0 0;
}
#outer-star{
    position:relative;
    font-size:40px;
    color:gold;
    margin:0 10px 0 10px;
    cursor:pointer;
    z-index:0;
}
#inner-star{
    position:absolute;
    font-size:40px;
    color:gold;
    margin:0 10px 0 10px;
    cursor:pointer;
    z-index:1;
    pointer-events: none;
}
.hover-zone {
    width:40px;
    height:40px;
}
</style>