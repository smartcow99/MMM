<template>
    <div id="channel-search">
        <h2 class="search-text">'{{$route.query['content']}}' 검색 결과</h2>
        <div id="short-list">
            <ChannelSummary 
                v-for="(value,index) in channelList" 
                :key="index"
                :channelInfo="value"
            />
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
    methods: {
        ...mapActions([
            'requestSearch'
        ])
    },
    watch: {
        '$route': {
            immediate: true,
            handler(to,from) {
                this.requestSearch({
                    'type':'channel',
                    'content':this.$route.query
                });
            }
        }
    }
}
</script>

<style>

</style> 