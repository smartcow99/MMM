<template>
    <div class="channel-mini">
        <img v-if="!!profile" class="profile-image" :src="profile"/>
        <img v-else class="profile-image" src="@/assets/images/defaultProfile.png"/>
        <span class="channel-name">{{name}}</span>
    </div>
</template>

<script>
export default {
    props: {
        'profile':String,
        'name':String
    }
}
</script>

<style scoped>
.channel-mini {
    display:flex;
    flex-direction:row;
    height:30px;
}
.profile-image {
    width:30px;
    height:30px;
}
.channel-name {
    margin:auto 0;
    margin-left:5px;
}
</style>