<template>
    <div id="channel-search">
        <h2 class="search-text">'{{$route.query['content']}}' 검색 결과</h2>
        <div id="channel-list" v-show="channelList.length>0">
            <ChannelSummary 
                v-for="(value,index) in channelList" 
                :key="index"
                :channelInfo="value"
            />
        </div>
        <div class="channel-list" v-show="channelList.length===0">
            <b>결과 없음</b>
        </div>
    </div>
</template>

<script>
import ChannelSummary from '../components/ChannelSummary.vue'
import {mapState,mapActions} from 'vuex'
export default {
    name: 'ChannelSearch',
    components: { ChannelSummary },
    computed: {
        ...mapState([
            'channelList'
        ])
    },
}
</script>

<style>

</style> 