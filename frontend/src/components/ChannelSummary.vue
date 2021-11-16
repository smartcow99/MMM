<template>
    <div>
        <router-link :to="{name: 'Channel', query: { channelId: channelInfo['channelId'] }}">
            channel summary
            채널 이름
            채널 프로필
            구독버튼(구독되어있다면 구독취소로 변경)
            shorts 개수
            채널 설명
        </router-link>
    </div>
</template>

<script>
export default {
    name:'ChannelSummary',
    props: {
        'channelInfo': Object
    }
}
</script>

<style>

</style>