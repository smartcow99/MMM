<template>
    <div>
        <textarea v-model="content" placeholder="댓글을 써주세요. 300자 제한"></textarea>
        <Btn @click="$emit('write',content)">댓글 쓰기</Btn>
    </div>

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