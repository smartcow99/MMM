<template>
    <div id="short">
        <div class="left">
            <button class="close" @click="$emit('close')">
                <font-awesome-icon icon="times"/>
            </button>
            <video></video>
            <font-awesome-icon icon="eye"/>
            {{currentShort['numOfViews']}}
            <font-awesome-icon icon="comment"/>
            {{currentShort['comments'].length}}
            <font-awesome-icon icon="heart"/>
            {{currentShort['numOfHearts']}}
            <font-awesome-icon icon="volume-up"/>
            <font-awesome-icon icon="volume-mute"/>
        </div>
        <div class="right">
            <h2>{{currentShort['title']}}</h2>
            <div>
                채널 정보
                {{currentShort['relatedChannel'].introduce}}
                채널 프로필
                <img :src="currentShort['relatedChannel'].profile"/>
                구독자수
                {{currentShort['relatedChannel'].numOfSubscribers}}
                short개수
                {{currentShort['relatedChannel'].numOfShorts}}
                구독버튼
                <Btn v-if="isSubscribed" :theme="gray" @click="unsubscribe">구독 취소</Btn>
                <Btn v-else :theme="primary" @click="subscribe">구독</Btn>
            </div>
            <div>
                영상 정보
                {{currentShort['info']}}
            </div>
            <Tag 
                v-for="(value,index) in currentShort['relatedTags']" :key="index"
                :title="value"
            />
            <ProductSlider :maxIndex="currentShort['relatedProducts'].length">
                <ProductMini
                    v-for="(value,index) in currentShort['relatedProducts']"
                    :key="index"
                    :title="value.title"
                    :img="value.img"
                    :productId="value.productId"
                />
            </ProductSlider>
            <WriteComment v-if="userInfo['isLogined']" @write="registComment"></WriteComment>
            <div v-else>
                댓글을 등록하려면 로그인을 해주세요
                <Btn @click="openLogin">로그인</Btn>
            </div>
            <div>
                <Comment 
                    v-for="(comment,index) in currentShort['comments']"
                    :key="index" 
                    :commentInfo="comment"
                    
                />
            </div>

        </div>
    </div>
</template>

<script>
import ProductMini from '@/components/ProductMini.vue'
import ProductSlider from '@/components/ProductSlider.vue'
import TagList from '@/components/TagList.vue'
import WriteComment from '../WriteComment.vue'
import Comment from '../Comment.vue'
import Btn from '../Btn.vue'
import { mapState,mapMutations,mapActions} from 'vuex'
export default {
    components: { TagList, ProductSlider,ProductMini,WriteComment,Comment,Btn },
    name:'Short',
    computed: {
        ...mapState([
            'currentShort',
            'userInfo'
        ])
    },
    methods: {
        ...mapMutations([
            'setLoginPageOn'
        ]),
        ...mapActions([
            'requestComments',
            'requestRelatedChannelInfo',
            'requestRelatedProducts',
            'requestRelatedTags',
            'requestRegistComment',
            'requestSubscribe',
            'requestUnsubscribe'
        ]),
        registComment(comment) {
            alert('데모 아이디로는 댓글을 등록할 수 없습니다.')
            // this.requestRegistComment({
            //     shortId:this.currentShort.shortId,
            //     comment
            // })
        },
        openLogin(){
            this.setLoginPageOn(true)
        },
        subscribe() {
            this.requestSubscribe(this.currentShort['channelId']);
            this.requestRelatedChannelInfo(this.currentShort['channelId']);
        },
        unsubscribe() {
            this.requestUnsubscribe(this.currentShort['channelId']);
            this.requestRelatedChannelInfo(this.currentShort['channelId']);
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
    z-index:100;
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
    backdrop-filter:blur(4px);
    background-color:#333333;
}
.right {

}
</style>