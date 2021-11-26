<template>
    <div class="purchase-card">
        <h1>구매하기</h1>
        <h1 v-if="mileageOn">{{currentProduct['price']-usingMileage}}원</h1>
        <h1 v-else>{{currentProduct['price']}}원</h1>

        <div class="mileage-area">
            <span>보유 마일리지 : {{ownMileage}}</span>
            <span class="mileage-input-area">
                <input id="mileage-input-box" type="number" placeholder="사용할 마일리지를 입력하세요" @keyup.enter="useMileage" v-model.number="usingMileage">
                <Btn id="use-mileage-button" @click="useMileage">사용</Btn>
            </span>
        </div>

        <div class="price-area">
        <div class="original-price-area">
            <p>최종 결제 금액</p>
            <p id="original-price">{{currentProduct['price']}}원</p>
            <small v-if="mileageOn">-{{usingMileage}}</small>
        </div>
        <div class="final-price-area">
            <p id="final-price" v-if="mileageOn">{{currentProduct['price']-usingMileage}}원</p>
            <p id="final-price" v-else>{{currentProduct['price']}}원</p>
            
        </div>
        </div>

        <Btn id="purchase-button" @click="purchase">구매</Btn>
    </div>
</template>

<script>
import Btn from '@/components/Btn.vue'
import { mapState } from 'vuex';
export default {
     computed: {
        ...mapState([
            'currentProduct',
        ])
    },
data(){
    return{
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
        }
    },
    purchase(){
        alert("데모 버전에선 상품을 구매할 수 없습니다.")
    }
},
components:{
    Btn,
},
}
</script>

<style scoped>
*{
    font-family:'rubik';
    font-size:14px;
}
h1{
    font-size: 40px;
    margin:5px 0 10px 0;
}
p{
    font-weight: bold;
}
small{
    font-weight: bold;
}
#original-price{
    font-size:28px;
    margin:0;
}

.purchase-card{
    display:flex;
    flex-direction: column;
    align-items: center;
    width:500px;
    height:600px;
    padding:50px;
    border-radius:4px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    background-color:#FFFFFF;
}
.mileage-area{
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.mileage-input-area{
    width:400px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
}
#mileage-input-box{
    width:330px;
    height:40px;
}
#use-mileage-button{
    width: 60px;
    height:40px;
    padding:0;
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
#final-price{
    font-size:28px;
    margin:0;
}
#purchase-button{
    width:400px;
    height:40px;
    margin:30px 0 0 0;
    
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>