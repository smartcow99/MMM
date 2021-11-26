<template>
<div class="loginCard">
    <span id="welcome-message">welcome to</span>
    <div class="logo">
        <div id="main-logo">MMM</div>
        <div id="sub-logo">makeup maketh man</div>
    </div>
    
    <div class="login-form" @keyup.enter="requestLogin">
        <div id="input-id">
            <font-awesome-icon id="user-icon" :icon="faUser"/>
            <input type="text" v-model="id" name="userId"/>
        </div>
        <div id="input-password">
            <font-awesome-icon id="lock-icon" :icon="faLock"/>
            <input type="password" v-model="password" name="userPassword"/>
        </div>
        <Btn type="submit" id="submit-button" @click="requestLogin">Log in</Btn>      

        <div class="other-button">
            <button id="sign-up" @click="goToSignUp">회원가입</button>
            <button id="find-password" @click="goToFindPassword">비밀번호 찾기</button> 
        </div>
    </div>
</div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex'
import Btn from '@/components/Btn.vue';

import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'

export default {
name:'Login',
data(){
    return{
        faUser,
        faLock,
        id:'',
        password:''
    }
},
computed: {
    ...mapState([
        'userInfo'
    ])
},
methods:{
    requestLogin(){
        this.$store.dispatch('requestLogin',{
            id:this.id,
            password:this.password
        });
    },
    
    goToSignUp(){
        alert("데모 버전에선 이용할 수 없습니다.")
    },
    goToFindPassword(){
        alert("데모 버전에선 이용할 수 없습니다.")
    }
    
},
watch: {
    'userInfo.isLogined'(isLogined) {
        if(isLogined) {
            this.$parent.$emit('close',true);
        }
    }
},
components:{
    Btn,
}

}
</script>

<style scoped>
* {
    font-family: 'rubik';
    font-size:14px;
    z-index:110;
}
.loginCard{
    display:flex;
    flex-direction:column;
    width:500px;
    height:600px;
    padding:50px;
    border-radius:4px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    background-color:#FFFFFF;
}
.logo{
    display:flex;
    flex-direction:column;
    align-items: center;
}
#welcome-message{
    text-align: center;
    padding:0;
}
#main-logo{
    font-size:80px;
    position:relative;    
}
#sub-logo{
    font-size:14px;
}
.login-form{
    margin:30px 0 30px 0;
    display: flex;
    flex-direction:column;
    align-items: center;
    
}
input{  
    width:340px;
    height:30px;
    border:0;
}
input:focus{
    outline: none;
}
#input-id{
    width:400px;
    height:40px;
    border: 1px solid #CCCCCC;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-around;
    margin:70px 0 10px 0;
}
#user-icon{
    width:20px;
    height:20px;
}
#input-password{ 
    width:400px;
    height:40px;
    border: 1px solid #CCCCCC;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-around;
    margin:10px 0 10px 0;

}
#lock-icon{
    width:20px;
    height:20px;
}
#submit-button{
    width:400px;
    height:40px;
    border-radius: 4px;
    background-color:#3D3D78;
    color: #FFFFFF;
    margin:40px 0 0 0;
    cursor:pointer;
    
}

.other-button{
    width:400px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:5px;
}
#sign-up{
    border:transparent;
    background-color: transparent;
    cursor:pointer;
}
#find-password{
    border:transparent;
    background-color: transparent;
    cursor:pointer;
}
.other-button button:hover {
    text-decoration: underline;
}
</style>