<template>
<!-- <div class="entire-card"> -->
<div class="loginCard">
    <span id="welcome-message">welcome to</span>
    <div class="logo">
        <div id="main-logo">MMM</div>
        <div id="sub-logo">makeup maketh man</div>
    </div>
    
    <!-- <form @submit="onSubmit" class="login-form"> -->
    <form class="login-form" >
        <div id="input-id">
            <font-awesome-icon :icon="faUser"/>
            <input type="text" name="userId"/>
        </div>
        <div id="input-password">
            <font-awesome-icon :icon="faLock"/>
            <input type="password" name="userPassword"/>
        </div>
        <button type="submit" id="submit-button" @click="requestLogin">Log in</button>      
    </form>

        <div class="other-button">
            <button id="sign-up" @click="goToSignUp">회원가입</button>
            <button id="find-password" @click="goToFindPassword">비밀번호 찾기</button> 
        </div>
</div>
<!-- <button id="close-button" @click="closeCard"><font-awesome-icon :icon="faTimes"/></button> -->
<!-- </div> -->
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex'

import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
// import {faTimes} from '@fortawesome/free-solid-svg-icons'

export default{
name:'Login',
data(){
    return{
        faUser,
        faLock,
        // faTimes,
    }
},

methods:{
    requestLogin(){
        this.$store.actions.requestLogin;
    },
    
    // closeCard(){
    //     console.log("close card")
    // },
    goToSignUp(){
        console.log("go to sign up")
    },
    goToFindPassword(){
        console.log("go to find pwd")
    }
    
},

}
</script>

<style>
*{
    font-family: 'rubik';
    font-size:14px;
}
/* .entire-card{
    display:flex;
    flex-direction: row;
    align-items: flex-start;
}
#close-button{
    font-size:40px;
    margin:200px 0 0 0;
} */
.loginCard{
    display:flex;
    flex-direction:column;
    /* align-items: center; */
    margin:200px auto;
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
    margin:60px 0 0 0;
    padding:0;
}
#main-logo{
    font-size:100px;
    position:relative;
    
}
#sub-logo{
    font-size:14px;
    /* position:absolute;
    top:450px; */
}
.login-form{
    display: flex;
    flex-direction:column;
    align-items: center;
}
input{  
        width:400px;
        height:40px;
        border: 1px solid #CCCCCC;
        border-left-width: 0;
        border-right-width: 0;
        border-top-width: 0;
        margin:10px;
}
/* #input-id{
    display:flex;
    flex-direction:row;
}
#input-password{
    display:flex;
    flex-direction:row;
} */
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
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:5px;
}
#sign-up{
    margin-left:50px;
    border:transparent;
    background-color: transparent;
    cursor:pointer;
}
#find-password{
    margin-right:50px;
    border:transparent;
    background-color: transparent;
    cursor:pointer;
}
</style>