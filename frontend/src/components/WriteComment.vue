<template>

    <div class="write-review-area">
        <p id="comment-count">댓글</p>
        <!-- <p id="comment-count">댓글({{currentShort[comments]}})</p> -->
        <div class="write-review-box">
            <textarea v-model="content" placeholder="댓글을 써주세요. 300자 제한"></textarea>
            <Btn id="write-review-button" @click="$emit('write',content)">댓글 쓰기</Btn>
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
.write-review-area{
    margin-top: 50px;
    /* position:absolute; */
    width:700px;
}
#comment-count{
    /* display:inline; */
    margin:0;
    font-weight: bold;
    font-size:24px;
}
.write-review-box{
    position:relative;
    width:700px;
}
.write-review-box textarea{
    width: 700px;
    height: 200px;
}

#write-review-button{
    position: absolute;
    top:150px;
    left:590px;
}
</style>