<template>
    <div class="channel-summary">
        <img v-if="!!profile" class="profile-image" :src="profile"/>
        <img v-else class="profile-image" src="@/assets/images/defaultProfile.png"/>
        <span>{{name}}</span>
    </div>
</template>

<script>
export default {
    props: {
        'profile':URL,
        'name':String
    }
}
</script>

<style scoped>
.profile-image {
    width:30px;
    height:30px;
}
</style>