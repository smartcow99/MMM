<template>
    <div class="write-review-card">
        <h1>나의 사용 후기</h1>
        
        <div v-if="ratedOn" class="star-point-area">
             <span v-if="rate<0.5">
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<1">
            <font-awesome-icon id="star" :icon="['fas','star-half-alt']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<1.5">
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<2">
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" :icon="['fas','star-half-alt']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<2.5">
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<3">
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" :icon="['fas','star-half-alt']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<3.5">
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<4">
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" :icon="['fas','star-half-alt']"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>

        </span>
        <span v-else-if="rate<4.5">
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<5">
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" :icon="['fas','star-half-alt']"/>
        </span>
        <span v-else>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
            <font-awesome-icon id="star" icon="star"/>
        </span>
        </div>
        <div v-else class="star-point-area">
            <font-awesome-icon id="star" @click="oneStar" :icon="['far','star']"/>
            <font-awesome-icon id="star" @click="twoStar" :icon="['far','star']"/>
            <font-awesome-icon id="star" @click="threeStar" :icon="['far','star']"/>
            <font-awesome-icon id="star" @click="fourStar" :icon="['far','star']"/>
            <font-awesome-icon id="star" @click="fiveStar" :icon="['far','star']"/>
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
        oneStar(){
            this.rate=1;
            this.ratedOn=true;
        },
        twoStar(){
            this.rate=2;
            this.ratedOn=true;
        },
        threeStar(){
            this.rate=3;
            this.ratedOn=true;
        },
        fourStar(){
            this.rate=4;
            this.ratedOn=true;
        },
        fiveStar(){
            this.rate=5;
            this.ratedOn=true;
            // this.$set(this.rate, 5);
            // console.log(this.rate)
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
    font-size:50px;
}
.write-review-card{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:200px auto;
    width:500px;
    height:700px;
    /* padding:50px; */
    border-radius:4px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    background-color:#FFFFFF;
}
/* .star-point-area{

} */
.write-review-area{
    display:flex;
    flex-direction: column;
    align-items: flex-start;

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
}
#register-review-button{
    width:400px;
    height:40px;
    margin:60px 0 0 0;
}
#star{
    font-size:40px;
    margin:0 10px 0 10px;
    cursor:pointer;
}
</style>