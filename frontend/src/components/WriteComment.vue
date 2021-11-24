<template>
    <div class="write-comment-area">
        <p id="comment-count">댓글 쓰기</p>
        <!-- <p id="comment-count">댓글({{currentShort[comments]}})</p> -->
        <div class="write-review-box">
            <textarea v-model="content" placeholder="댓글을 써주세요. 300자 제한"></textarea>
            <Btn id="write-review-button" @click="$emit('write',content)">댓글 등록</Btn>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import Btn from './Btn.vue'
export default {
    components: { Btn },
    commputed:{
        ...mapState([
            'currentShort',
        ])
    },
    data() {
        return {
            content:'',
            
        }
    },
}
</script>

<style scoped>
#comment-count{
    /* display:inline; */
    margin:0;
    margin-bottom:5px;
    font-weight: bold;
    font-size:24px;
}
.write-review-box{
    position:relative;
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    width:100%;
}
.write-review-box textarea{
    height: 100px;
    width:100%;
    margin-bottom:6px;
}

#write-review-button{
    width:100px;
}
</style>