<template>
    <div class="recommend-tags">
        <h3>추천 채널</h3>
        <ChannelSummary 
            v-for="(value,index) in channelList.slice(0,5)" 
            :key="index"
            :profile="value.profile"
            :name="value.name"
        >
            {{value}}    
        </ChannelSummary>  
    </div>
</template>

<script>
import ChannelSummary from '@/components/ChannelSummary.vue'
export default {
    name: 'RecommendChannels',
    props: {
        channelList: Array
    },
    components: {
        ChannelSummary
    }
}
</script>

<style>

</style>