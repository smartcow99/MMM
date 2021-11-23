<template>
    <div class="channel-list">
        <router-link
            v-for="(value,index) in channelList" 
            :key="index"
            :to="{ path: path, query:{'channelId':value.channelId}}"
        >
            <ChannelMini 
                :profile="value.profile"
                :name="value.title"
            >
            </ChannelMini>  
        </router-link>
    </div>
</template>

<script>
import ChannelMini from '@/components/ChannelMini.vue'
export default {
    name: 'ChannelList',
    props: {
        path:String,
        channelList: Array
    },
    components: {
        ChannelMini
    }
}
</script>

<style>

</style>