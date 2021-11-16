<template>
    <div class="recommend-tags">
        <router-link
            v-for="(value,index) in channelList.slice(0,5)" 
            :key="index"
            :to="{ path:'/channel', query:{'channelId':value.channelId}}"
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
        channelList: Array
    },
    components: {
        ChannelMini
    }
}
</script>

<style>

</style>