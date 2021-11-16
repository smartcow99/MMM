<template>
    <div>
        channel
        채널 {{$route.query['channelId']}}
        화장대
        <Detail>
            채널정보
        </Detail>
        관련 shorts
    </div>
</template>

<script>
import Detail from '../components/Detail.vue'
export default {
    name:'Channel',
    components: { Detail },
}
</script>

<style>

</style>