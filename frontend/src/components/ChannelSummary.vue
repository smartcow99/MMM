<template>
    <div class="channel-summary">
        <img class="channel-profile" :src="channelInfo['profile']" alt="채널 프로필"/>
        <div class="channel-info">
            <div class="channel-title">
                <router-link :to="{name: 'Channel', query: { channelId: channelInfo['channelId'] }}">
                    <h2>{{channelInfo['title']}}</h2>
                </router-link>
                <Btn class="subscribe-button" :theme="channelInfo['isSubscribed']?'gray':'primary'" @click="subscribe">
                    {{channelInfo['isSubscribed']?'구독 취소':'구독 하기'}}
                </Btn>
            </div>
            <small class="channel-meta">
                구독자 수 {{channelInfo['numOfSubscribers']}} |
                shorts 개수 {{channelInfo['numOfShorts']}}
            </small>
            <small class="channel-intro">{{channelInfo['introduce']}}</small>
        </div>
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
            alert('데모 계정에선 구독/구독 취소가 불가능합니다.')
        }
    }
}
</script>

<style lang="scss" scoped>
div.channel-summary {
    border: 1px solid var(--placeholder-color);
    border-radius:2px;
    display:flex;
    flex-direction:row;
    img.channel-profile {
        width:160px;
        height:160px;
        padding:20px;
        border-radius:50%;
    }
    div.channel-info {
        flex-grow:1;
        padding:20px 20px 10px 10px;
        display:flex;
        flex-direction:column;
        div.channel-title {
            display:flex;
            flex-direction:row;
            a { 
                margin:0;
                text-align:left;
                flex-grow:1;
                color:var(--primary-color);
                h2 {
                    margin:0;
                }
            }
            .subscribe-button {
                width:100px;
            }
        }
        small.channel-meta {
            text-align:left;
            margin-bottom:10px;
        }
        small.channel-intro {
            text-align:left;
        }
    }
}
</style>