<template>
    <div>
        channel search
        <ChannelSummary 
            v-for="(value,index) in channelList" 
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
        this.requestChannelList();
    },
    computed: {
        ...mapState([
            'channelList'
        ])
    },
    methods: {
        ...mapActions([
            'requestChannelList'
        ])
    }
}
</script>

<style>

</style> 