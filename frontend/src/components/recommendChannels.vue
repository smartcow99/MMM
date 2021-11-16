<template>
    <div class="recommend-tags">
        <h3>추천 채널</h3>
        <ChannelMini 
            v-for="(value,index) in channelList.slice(0,5)" 
            :key="index"
            :profile="value.profile"
            :name="value.name"
        >
            {{value}}    
        </ChannelMini>  
    </div>
</template>

<script>
import ChannelMini from '@/components/ChannelMini.vue'
export default {
    name: 'RecommendChannels',
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