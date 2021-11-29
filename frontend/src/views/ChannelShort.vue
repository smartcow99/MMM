<template>
    <div class="loading-guide page" v-show="currentChannel['channelId']<0">
        <font-awesome-icon class="loading icon" icon='spinner' spin/>
    </div>
    <div id="channel-short" class="page" v-show="currentChannel['channelId']>=0">
        <h1 v-if="currentChannel['channelId']===0">구독한 모든 채널 영상</h1>
        <h1 v-else-if="currentChannel['channelId']>0">{{`'${currentChannel.title}' 채널의 영상`}}</h1>
        <div class="short-list" v-if="currentChannel.shortList.length>0">
            <ShortSummary 
                class="item"
                v-for="(value,index) in currentChannel.shortList" 
                :key="index" 
                :shortInfo="value"
            />
        </div>
        <div class="loading-guider" v-if="isChannelShortLoading==='loading'">
            <font-awesome-icon class="loading icon" icon='spinner' spin/>
            <div class="space"></div>
            <p class="guide-text">loading</p>
        </div>
        <div class="loading-guider" v-else-if="isChannelShortLoading==='end'">
            <p>더 이상 불러올 컨텐츠가 없습니다.</p>
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
            'currentChannel',
            'isChannelShortLoading'
        ])
    }
}
</script>

<style scoped>
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
    margin-right:40px;
    margin-bottom:30px;
}
.loading-guide {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
}
.loading.icon {
    margin: auto;
}
.loading-guider p{
    margin-top:100px;
    text-align:center;
}
</style>