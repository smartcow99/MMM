<template>
    <div id="channel-short">
        <h1>'{{currentChannel.title}}'채널의 영상</h1>
        <div class="short-list">
            <ShortSummary 
                v-for="(value,index) in currentChannel.shortList" 
                :key="index" 
                :shortInfo="value"
            />
        </div>
    </div>
</template>

<script>
import ShortSummary from '../components/ShortSummary.vue'
import {mapState,mapActions} from 'vuex'
export default {
    name:'ShortList',
    components: {ShortSummary},
    data(){
        return {

        }
    },
    computed: {
        ...mapState([
            'currentChannel'
        ])
    },
    methods: {
        ...mapActions([
            'requestChannelInfo'
        ])
    },
    watch: {
        '$route': {
            immediate: true,
            handler(to,from) {
                this.requestChannelInfo(this.$route.query['channelId']);
            }
        }
    }
}
</script>

<style>
h1 {
    text-align:left;
}
.short-list {
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    max-width:1000px;
    width:100%;
    flex-wrap:wrap;
}
</style>