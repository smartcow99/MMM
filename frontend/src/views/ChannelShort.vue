<template>
    <div id="channel-short" class="page">
        <h1>'{{currentChannel.title}}' 채널의 영상</h1>
        <div class="short-list">
            <ShortSummary 
                class="item"
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
    width:100%;
    flex-wrap:wrap;
}
.short-list .item {
    margin-right:20px;
    margin-bottom:30px;
}
</style>