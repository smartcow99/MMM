<template>
    <div class="purchase-card">
        <h1>구매하기</h1>
        <h1 v-if="mileageOn">{{finalPrice}}원</h1>
        <h1 v-else>{{originalPrice}}원</h1>

        <div class="mileage-area">
            <span>보유 마일리지 : {{ownMileage}}</span>
            <span class="mileage-input-area">
                <input id="mileage-input-box" type="text" placeholder="사용할 마일리지를 입력하세요" @keyup.enter="useMileage" v-model="usingMileage">
                <Btn id="use-mileage-button" @click="useMileage">사용</Btn>
            </span>
        </div>

        <div class="price-area">
        <div class="original-price-area">
            <p>최종 결제 금액</p>
            <p>{{originalPrice}}원</p>
            <small v-if="mileageOn">-{{usingMileage}}</small>
        </div>
        <div class="final-price-area">
            <p v-if="mileageOn">{{finalPrice}}원</p>
            <p v-else>{{originalPrice}}원</p>
            
        </div>
        </div>

        <Btn id="purchase-button" @click="purchase">구매</Btn>
    </div>
</template>

<script>
import Btn from '@/components/Btn.vue'
export default {
data(){
    return{
        originalPrice:39000,
        mileageOn:false,
        usingMileage:'',
        ownMileage:"1234",
        finalPrice:'',
    }
},
methods:{
    useMileage(){
        if(this.usingMileage>this.ownMileage)
         alert("마일리지 부족");
         
        else{
            this.mileageOn=true;
            this.finalPrice=this.originalPrice-this.usingMileage;
            // this.usingMileage='';
        }
    },
    purchase(){
        alert("데모 버전에선 안돼용~")
    }
},
components:{
    Btn,
}
}
</script>

<style scoped>
*{
    font-family:'rubik';
    font-size:14px;
}
h1{
    font-size: 50px;
    margin:10px auto;
}
.purchase-card{
    display:flex;
    flex-direction: column;
    align-items: center;
     margin:200px auto;
    width:500px;
    height:600px;
    padding:50px;
    border-radius:4px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    background-color:#FFFFFF;
}
.mileage-area{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.mileage-input-area{
    width:400px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
#mileage-input-box{
    width:330px;
    height:35px;
}
#use-mileage-button{
    width: 50px;
    height:40px;
}
.price-area{
width:400px;
height:300px;
}
.original-price-area{
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    width:400px;
    height:200px;
}
.final-price-area{
    border-top:1px solid #3D3D78;
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    width:400px;
    height: 50px;
}
#purchase-button{
    width:400px;
    height:40px;
    margin:20px 0 0 0;
    
}
</style>