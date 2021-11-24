<template>
    <div>
        <video :src="url" autoplay muted/>
        <div class="video-control">
            <font-awesome-icon class="icon" icon="replay" @click="replay"/>
            <font-awesome-icon v-if="isPlayed" class="icon" icon="pause" @click="pause"/>
            <font-awesome-icon v-else class="icon" icon="play" @click="play"/>
            <font-awesome-icon v-if="isMuted" class="icon" icon="volume-up" @click="unmute"/>
            <font-awesome-icon v-else class="icon" icon="volume-mute" @click="mute" />
        </div>
    </div>
    
</template>

<script>
export default {
    name:'ShortVideo',
    props: {
        url:String
    }
}
</script>

<style>

</style>