<template>
    <div>
        channel search
        <ChannelSummary 
            v-for="(value,index) in recommandChannelList" 
            :key="index"
            :channelInfo="value"
        />
    </div>
</template>

<script>
import ChannelSummary from '../components/ChannelSummary.vue'
import {mapState,mapActions} from 'vuex'
export default {
    name: 'ChannelSearch',
    components: { ChannelSummary },
    mounted() {
        if(!!this.$route.query['content']) {
            this.requestSearch({
                'type':'channel',
                'content':this.$route.query
            });
        }
        else {
            this.getRecommandChannels();
        }
    },
    computed: {
        ...mapState([
            'recommandChannelList'
        ])
    },
    methods: {
        ...mapActions([
            'requestChannelList',
            'getRecommandChannels',
            'requestSearch'
        ])
    }
}
</script>

<style>

</style> 