<template>
    <div class="channel-summary">
        <img :src="channelInfo['profile']" alt="채널 프로필"/>
        <Btn :theme="channelInfo['isSubscribed']?'gray':'primary'" @click="subscribe">
            {{channelInfo['isSubscribed']?'구독 취소':'구독 하기'}}
        </Btn>
        <router-link :to="{name: 'Channel', query: { channelId: channelInfo['channelId'] }}">
            {{channelInfo['title']}}
        </router-link>
        <span>
            구독자 수 {{channelInfo['numOfSubscribers']}} |
            shorts 개수 {{channelInfo['numOfShorts']}}
        </span>
        <div>{{channelInfo['introduce']}}</div>
    </div>
</template>

<script>
import Btn from '@/components/Btn.vue'
import { mapActions } from 'vuex'
export default {
    name:'ChannelSummary',
    components: {
        Btn
    },
    props: {
        'channelInfo': Object
    },
    methods: {
        ...mapActions([
            'requestSubscribe',
            'requestUnsubscribe'
        ]),
        subscribe() {
            const isSubscribed = this.channelInfo['isSubscribed'];
            if(isSubscribed) {
                this.requestUnsubscribe();
            }
            else {
                this.requestSubscribe();
            }
        }
    }
}
</script>

<style>

</style>