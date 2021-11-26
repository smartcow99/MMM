<template>
<div class="comment-box">
    <div class="channel-info">
        <!-- 채널 프로필 -->
        <!-- <img @click="test" class="channel-profile-image" src='@/assets/images/defaultProfile.png' alt="내 프로필"/> -->
        <img :src="commentInfo.profile" alt="채널 프로필"/>
        {{this.commentInfo.name}}
    </div>
    <p class="comment-content">{{this.commentInfo.content}}</p>
</div>
</template>

<script>
export default {
    name:'Comment',
    props:{
        commentInfo:String,
    }
}
</script>

<style scoped>
img{
    width:40px;
    height:40px;
    margin-right: 10px;
}
.comment-box{
    width:100%;
    border:1px solid var(--placeholder-color);
    border-radius: 4px;
    margin:10px 0 10px 0;
}
.channel-info{  
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-left:10px;
    font-size:20px;
}
.comment-content{
    margin-left: 10px;
    color:var(--text-color);
}
</style>