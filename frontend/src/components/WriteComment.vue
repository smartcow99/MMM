<template>
    댓글 쓰기(로그인 안돼있으면 불가능하게 제한)
    <textarea v-model="content" placeholder="300자 제한"></textarea>
    <Btn @click="$emit('write',content)">댓글 쓰기</Btn>
</template>

<script>
import Btn from './Btn.vue'
export default {
    components: { Btn },
    data() {
        return {
            content:''
        }
    }
}
</script>

<style>

</style>