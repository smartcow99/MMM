<template>
<div class="not-found page">
    <div class="error-cover">
        <img src="@/assets/images/oops.png"/>
    </div>
    <div class="error-content">
        <div class="error-code">{{code}}</div>
        <div class="error-message">{{ message }}</div>
        <div class="error-description" v-html="description"></div>
        <div class="go-other-page">
        <router-link to="/">
            <button class="solid">Go Home</button>
        </router-link>
        <!-- <button class="solid" onclick="javascript:history.back();">
            <a href="javascript:history.back();">Go Back</a>
        </button> -->
        </div>
    </div>
</div>

</template>

<script>
export default {
    name:'NotFound',
    data() {
        return {
            code:404,
            message:'Page Not Found',
            description: `<p>이런! 잘못된 페이지에 접근하셨어요.<br/>Home으로 돌아갈 수 있는 버튼을 놔드릴게요</p> `
        }
    }
}
</script>

<style scoped>
.not-found {
    padding:50px 50px;
    display:flex;
    flex-direction:row;
}
.error-code{
    font-size:10rem;
}
.error-message {
    font-size:4rem;
}
.error-description {
    margin-top:40px;
}
button {
    cursor:pointer;
    background-color:var(--primary-color);
    color:white;
    border:transparent;
    border-radius: 4px;
    padding:10px 20px;
    height:40px;
    width:100px;
}
</style>