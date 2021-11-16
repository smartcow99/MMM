<template>
    <div id="short">
        shorts
        <button @click="$emit('close')">
            <font-awesome-icon icon="times"/>
        </button>
        영상제목{{info['title']}}
        채널 정보
            채널 프로필
            구독자수
            short개수
            구독버튼
            채널 정보
        영상 정보
        태그들

    </div>
</template>

<script>
export default {
    name:'Short',
    props: {
        'info': Object
    }
}
</script>

<style>
#short {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:#ffffff;
}
</style>