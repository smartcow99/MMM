<template>
    <div id="short">
        <div class="left">
            <button class="close" @click="$emit('close')">
                <font-awesome-icon icon="times"/>
            </button>
            <video></video>
            영상 조회수
            영상 하트 개수
            영상 댓글 개수
            <font-awesome-icon icon="eye"/>
            <font-awesome-icon icon="comment"/>
            <font-awesome-icon icon="heart"/>
        </div>
        <div class="right">
            <h2>{{currentShort['title']}}</h2>
            <div>
                채널 정보
                채널 프로필
                구독자수
                short개수
                구독버튼
            </div>
            <div>
                영상 정보
            </div>
            <TagList :tagList="currentShort['relatedTags']"></TagList>
            <ProductSlider :productList="currentShort['relatedProducts']"></ProductSlider>
            <WriteComment></WriteComment>
            <div>
                <Comment 
                    v-for="(comment,index) in currentShort['comments']"
                    :key="index" 
                    :commentInfo="comment"
                    @write="registComment"
                />
            </div>

        </div>
    </div>
</template>

<script>
import ProductSlider from '@/components/ProductSlider.vue'
import TagList from '@/components/TagList.vue'
import WriteComment from '../WriteComment.vue'
import Comment from '../Comment.vue'
import { mapState,mapMutations,mapActions} from 'vuex'
export default {
    components: { TagList, ProductSlider,WriteComment,Comment },
    name:'Short',
    created(){
        this.requestComments(this.currentShort.shortId);
        this.requestRelatedChannelInfo(this.currentShort.channelId);
        this.requestRelatedProducts(this.currentShort.shortId);
        this.requestRelatedTags(this.currentShort.shortId);
    },
    computed: {
        ...mapState([
            'currentShort',
            'userInfo'
        ])
    },
    methods: {
        ...mapActions([
            'requestComments',
            'requestRelatedChannelInfo',
            'requestRelatedProducts',
            'requestRelatedTags',
            'requestRegistComment'
        ]),
        registComment(comment) {
            this.requestRegistComment({
                shortId:this.currentShort.shortId,
                comment
            })
        }
    }
}
</script>

<style scoped>
#short {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    background-color:#ffffff;
}
.left .close {
    position:absolute;
    left:10px;
    top:10px;
}
.left,.right {
    width:50%;
    height:100%;
}
.left {

    background-color:#333333;
}
.right {

}
</style>