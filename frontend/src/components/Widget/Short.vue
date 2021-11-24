<template>
    <div id="short">
        <div id="left">
            <button class="close" @click="$emit('close')">
                <font-awesome-icon icon="times"/>
            </button>
            <div id="short-video"> 
                <ShortVideo :src="currentShort['url']"/>
            </div>
            <span class="short-meta-info">
                <div class="like">
                    <font-awesome-icon class="heart-icon" icon="heart" @click="likeUp"/>
                    <small>{{this.currentShort['numOfHearts']}}</small>
                </div>

                <div class="comment">
                    <font-awesome-icon class="icon" icon="comment"/>
                    <small>{{this.currentShort['comments'].length}}</small>
                </div>
                
                <div class="view">
                    <font-awesome-icon class="icon" icon="eye"/>
                    <small>{{this.currentShort['numOfViews']}}</small>
                </div>

            </span>
        </div>
        <div id="right">
            <h2 id="short-title">{{currentShort['title']}}</h2>
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
                            <small>
                                구독자수
                                {{currentShort['relatedChannel'].numOfSubscribers}}
                            </small> &nbsp;<small>|</small>&nbsp;
                            <small>
                                short개수
                                {{currentShort['relatedChannel'].numOfShorts}}
                            </small>
                            
                        </div>
                    </div>
                    <!-- 구독버튼 -->
                    <Btn id="subscribe-button" v-if="currentShort['relatedChannel'].isMyShort" :theme="white" @click="modifyShort">수정하기</Btn>
                    <Btn id="subscribe-button" v-else-if="isSubscribed" :theme="gray" @click="unsubscribe">구독 취소</Btn>
                    <Btn id="subscribe-button" v-else :theme="primary" @click="subscribe">구독</Btn>
                </div>
                <div id="channel-explanation">
                    <!-- 채널 정보 -->
                    <!-- {{currentShort['relatedChannel'].introduce}} -->
                </div>
            </div>
            <div id="short-explanation">   <!--영상정보-->
                {{currentShort['info']}}
            </div>
            <div class="tag-area">
                <div class="tag-list">
                    <Tag 
                        v-for="(value,index) in currentShort['relatedTags']" :key="index"
                        :title="value"
                    />
                </div>
            </div>
            <Slider class="slider"
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
            <div class="comment-area">
                <WriteComment v-if="userInfo['isLogined']" @write="registComment"></WriteComment>
                <div class="unlogined-comment" v-else>
                    댓글을 등록하려면 로그인을 해주세요
                    <Btn class="login-button" @click="openLogin">로그인</Btn>
                </div>
                <div class="no-comment" v-if="currentShort['comments'].length===0">
                    등록된 댓글이 없습니다.
                </div>
                <div v-else class="comment-list">
                    <Comment 
                        v-for="(comment,index) in currentShort['comments']"
                        :key="index" 
                        :commentInfo="comment"
                    />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Tag from '@/components/Tag.vue'
import ProductMini from '@/components/ProductMini.vue'
import Slider from '@/components/Slider.vue'
import WriteComment from '../WriteComment.vue'
import Comment from '../Comment.vue'
import Btn from '../Btn.vue'
import { mapState,mapMutations,mapActions} from 'vuex'
import ShortVideo from '../ShortVideo.vue'
export default {
    components: { Tag,Slider,ProductMini,WriteComment,Comment,Btn, ShortVideo },
    data(){
        return{
            comment:"test",
            isMuted:true,
            isPlayed:true,
            isEnd:false,
        }
    },
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
            // 'requestRelatedChannelInfo',
            'requestSubscribe',
            'requestUnsubscribe',
            'requestProductInfo'
        ]),
        registComment(comment) {
            alert('데모 아이디로는 댓글을 등록할 수 없습니다.')
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
        likeUp(){
            alert('데모 버전에선 \'좋아요\' 불가능합니다.');
        },
        pause(){
            console.log(this.isPlayed)
            $("#video-element").get(0).pause();
            // $("video-elemnt").stop();
            this.isPlayed=false
            console.log(this.isPlayed)
        },
        play() {
            this.$("#video-element").play();
            this.isPlayed=true
        },
        replay(){
            this.isEnd=false
        },
        mute(){
            this.isMuted=true
        },
        unmute(){
            this.isMuted=false
        }

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
#left,#right {
    height:100%;
}
#left {
    flex-grow:1;
    position:relative;
    backdrop-filter:blur(4px);
    background-color:#333333;
    .close {
        position:absolute;
        font-size: 28px;
        left:10px;
        top:10px;
        border:transparent;
        background-color: transparent;
        cursor:pointer;
    }
    .close:hover{
        color:white;
    }
    #short-video {
        display:flex;
        flex-direction:row;
        justify-content: center;
    }
    #video-element{
        
    }
    .video-control{
        top:100%;
        width:120px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        
        .icon{
            cursor:pointer;
        }
    }
    
    .short-meta-info {
        position:absolute;
        right:10px;
        bottom:30px;
        width:100px;
        display:flex;
        flex-direction:column;
        justify-content: center;
        color:white;
        /* .icon {
            margin:0 auto;
        } */
        .heart-icon{
            cursor:pointer;
        }
    }
}
#right {
    display:flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    width:740px;
    & > * {
        width:700px;
        margin:0 auto;
    }
    #short-title{
        font-weight: bold;
        margin-top:30px;
        margin-bottom:30px;
    }
    .channel{
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        .channel-info{
            display:flex;
            flex-direction: row;
            margin-bottom:40px;
            img.channel-profile-image{
                width:40px;
                height: 40px;
                margin-right:14px;
            }
            #channel-meta-data{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-grow:1;
                #channel-name{
                    width:100%;
                    text-align: left;
                }
                #channel-data{
                    display:flex;
                    flex-direction: row;
                    & > * {
                        margin:auto 0;
                    }
                }
            }
            #channel-explanation{
                margin-top: 10px;
                margin-bottom: 20px;
                text-align: left;
            }
            #subscribe-button {
                width:100px;
            }
        }
    }
    #short-explanation{
        margin-bottom: 20px;
        text-align: left;
    }
    .tag-area {
        height:80px;
        margin-bottom:20px;
        .tag-list {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
        }
    }
    .slider {
        margin:0 auto;
        margin-bottom:20px;
    }

}
.comment-area {
    flex-grow:1;
    padding-right:10px;
    overflow-y:auto;
    .unlogined-comment{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        .login-button {
            width:100px;
        }
    }
    .no-comment {
        color:var(--placeholder-color);
        padding:5px 0;
        font-size:1.2rem;
    }
    &::-webkit-scrollbar {
        background-color:white;
        width:12px;
    }
    &::-webkit-scrollbar-thumb {
        background-color:white;
    }
    &:hover::-webkit-scrollbar-thumb {
        background-color:var(--placeholder-color);
    }
}
div{
    .like{
        margin: 10px 0 10px 0;
        font-size: 28px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .comment{
        margin: 10px 0 10px 0;
        font-size: 28px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .view{
        margin: 10px 0 10px 0;
        font-size: 28px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

}

</style>