<template>
    <div id="short">
        <div class="left">
            <button class="close" @click="$emit('close')">
                <font-awesome-icon icon="times"/>
            </button>
            <div id="short-video"> 
                <video :src="currentShort['url']"/>
                <font-awesome-icon class="icon" icon="redo"/>
                <font-awesome-icon class="icon" icon="pause"/>
                <font-awesome-icon class="icon" icon="play"/>
                <font-awesome-icon icon="volume-up"/>
                <font-awesome-icon icon="volume-mute"/>
            </div>
            <span class="short-meta-info">
                <font-awesome-icon class="icon" icon="eye"/>
                <small>{{currentShort['numOfViews']}}</small>
                <font-awesome-icon class="icon" icon="comment"/>
                <small>{{currentShort['comments'].length}}</small>
                <font-awesome-icon class="icon" icon="heart"/>
                <small>{{currentShort['numOfHearts']}}</small>
            </span>
        </div>
        <div class="right">
            <h2>{{currentShort['title']}}</h2>
            <div class="channel">
                <div class="channel-info">
                    <!-- 채널 프로필 -->
                    <img class="channel-profile-image" src='@/assets/images/defaultProfile.png' alt="내 프로필"/>
                    <!-- <img :src="currentShort['relatedChannel'].profile" alt="채널 프로필"/> -->
                    <div id="channel-meta-data">
                        <router-link id="channel-name"
                            @click.capture="setShortPageOn(false)"
                            :to="{name: 'Channel', query: { channelId: currentShort['relatedChannel'].channelId }}">
                            {{currentShort['relatedChannel'].title}}
                        </router-link>
                        <div id="channel-data">
                            구독자수
                            {{currentShort['relatedChannel'].numOfSubscribers}} &nbsp;| &nbsp;
                            short개수
                            {{currentShort['relatedChannel'].numOfShorts}}
                        </div>
                    </div>
                    <!-- 구독버튼 -->
                    <Btn id="subscribe-button" v-if="isSubscribed" :theme="gray" @click="unsubscribe">구독 취소</Btn>
                    <Btn id="subscribe-button" v-else :theme="primary" @click="subscribe">구독</Btn>
                </div>
                <div id="channel-explanation">
                    <!-- 채널 정보 -->
                    {{currentShort['relatedChannel'].introduce}}
                </div>
            </div>
           
            <div id="short-explanation">   <!--영상정보-->
                {{currentShort['info']}}
            </div>
            <Tag 
                v-for="(value,index) in currentShort['relatedTags']" :key="index"
                :title="value"
            />
            <Slider 
                :count="4"
                :elWidth="100"
                :maxIndex="currentShort['relatedProducts'].length">
                <ProductMini
                    v-for="(value,index) in currentShort['relatedProducts']"
                    :key="index"
                    @click.capture="setShortPageOn(false)"
                    :title="value.title"
                    :img="value.img"
                    :productId="value.productId"
                />
            </Slider>
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
import Slider from '@/components/Slider.vue'
import WriteComment from '../WriteComment.vue'
import Comment from '../Comment.vue'
import Btn from '../Btn.vue'
import { mapState,mapMutations,mapActions} from 'vuex'
export default {
    components: { Slider,ProductMini,WriteComment,Comment,Btn },
    name:'Short',
    computed: {
        ...mapState([
            'currentShort',
            'userInfo'
        ])
    },
    methods: {
        ...mapMutations([
            'setLoginPageOn',
            'setShortPageOn'
        ]),
        ...mapActions([
            'requestComments',
            'requestRelatedChannelInfo',
            'requestRelatedProducts',
            'requestRelatedTags',
            'requestRegistComment',
            'requestSubscribe',
            'requestUnsubscribe',
            'requestProductInfo'
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
            alert('데모버전에선 구독요청이 불가능합니다.');
            // this.requestSubscribe(this.currentShort['channelId']);
            // this.requestRelatedChannelInfo(this.currentShort['channelId']);
        },
        unsubscribe() {
            alert('데모버전에선 구독취소가 불가능합니다.');
            // this.requestUnsubscribe(this.currentShort['channelId']);
            // this.requestRelatedChannelInfo(this.currentShort['channelId']);
        },
        modifyShort() {
            alert('데모버전에선 수정 불가능합니다.');
        },
        pause(){

        },
        play() {

        },

    }
}
</script>
<style lang="scss" scoped>
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
    .left,.right {
        width:50%;
        height:100%;
    }
    .left {
        position:relative;
        backdrop-filter:blur(4px);
        background-color:#333333;
        .close {
            position:absolute;
            left:10px;
            top:10px;
        }
        #short-video {
            position:absolute;
            width:100%;
            max-width:600px;
            height:100%;
            max-height:800px;
            top:50%;
            left:50%;
            margin-left:-300px;
            margin-top:-400px;
            background-color:green;
        }
        .short-meta-info {
            position:absolute;
            right:50px;
            bottom:50px;
            width:100px;
            display:flex;
            flex-direction:column;
            justify-content: center;
            color:white;
            .icon {
                margin:0 auto;
            }
        }
    }
.right {
    display:flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    margin-left: 50px;
}

img.channel-profile-image{
    width:40px;
    height: 40px;
}
.channel{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
}
#channel-name{
    width:100%;
    text-align: left;
}
.channel-info{
    display:flex;
    flex-direction: row;
}
#channel-meta-data{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 400px;
    margin-left: 10px;
}
#channel-data{
    display:flex;
    flex-direction: row;
}
#channel-explanation{
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: left;
}
/* #subscribe-button{
    float:right;
} */
#short-explanation{
    width:750px;
    margin-top: 10px;
    margin-bottom: 30px;
    text-align: left;
}
</style>