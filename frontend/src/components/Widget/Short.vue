<template>
    <div id="short">
        <div id="left">
            <div class="short-meta-info">
                <div class="like">
                    <font-awesome-icon class="icon" :icon="['far','heart']" @click="likeUp"/>
                    <small>{{translateUnit("like", this.currentShort['numOfHearts']).returnVal}}</small>
                </div>
                <div class="comment">
                    <font-awesome-icon class="icon" :icon="['far','comment-dots']"/>
                    <small>{{translateUnit("comment", this.currentShort['comments'].length).returnVal}}</small>
                </div>
                <div class="view">
                    <font-awesome-icon class="icon" :icon="['far','eye']"/>
                    <small>{{translateUnit("view", this.currentShort['numOfViews']).returnVal}}</small>
                </div>
            </div>
            <button class="close" @click="$emit('close')">
                <img src="@/assets/images/times.png"/>
            </button>
            <div class="video-zone">
                <ShortVideo id="short-video" :src="currentShort['url']"/>
                <!-- <ShortVideo id="short-video" :src="`http://34.64.76.43:3000/shorts/Oval_23%20(2).mp4`"/> -->
            </div>
        </div>
        <div id="loading-guide" v-show="isLoading">
            <div class="space">
                
            </div>
            <font-awesome-icon class="loading icon" icon="spinner" spin/>
        </div>
        <div id="right" v-show="!isLoading">
            <h2 id="short-title">
                {{currentShort['title']}}
            </h2>
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
            </div>
            <div id="short-explanation">   <!--영상정보-->
                <p>{{currentShort['info']}}</p>
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
                    <p>댓글을 등록하려면 로그인을 해주세요</p>
                    <Btn class="login-button" @click="openLogin">로그인</Btn>
                </div>
                <div class="no-comment" v-if="currentShort['comments'].length===0">
                    등록된 댓글이 없습니다.
                </div>
                <div v-else class="comment-list" @scroll="scrollHandler($event)" ref="comment">
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
import ShortVideo from '@/components/ShortVideo.vue'
import Tag from '@/components/Tag.vue'
import ProductMini from '@/components/ProductMini.vue'
import Slider from '@/components/Slider.vue'
import WriteComment from '../WriteComment.vue'
import Comment from '../Comment.vue'
import Btn from '../Btn.vue'
import { mapState,mapMutations,mapActions} from 'vuex'
export default {
    components: { Tag,Slider,ProductMini,WriteComment,Comment,Btn,ShortVideo },
    data(){
        return{
            comment:"test",
            isMuted:true,
            isPlayed:true,
            isEnd:false,
            scrollHistory:0,
            isLoaded:true,
        }
    },
    name:'Short',
    computed: {
        ...mapState([
            'currentShort',
            'userInfo'
        ]),
        isLoading() {
            return this.currentShort.shortId===0;
        }
    },
    methods: {
        ...mapMutations([
            'setLoginPageOn',
            'setShortPageOn'
        ]),
        ...mapActions([
            'requestSubscribe',
            'requestUnsubscribe',
            'requestProductInfo',
            'moreComment'
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
        scrollHandler(event) {
            const el = this.$refs['comment'];
            const scrollPosition = (event.target.scrollTop+el.clientHeight)/300;
            const scrollEnd = (el.scrollHeight/300).toFixed(0);
            if(this.scrollHistory >= scrollPosition.toFixed(0)) {
                return;
            }
            this.scrollHistory = scrollPosition.toFixed(0);
            if(this.scrollHistory > scrollEnd-1) {
                this.moreComment(this.currentShort.shortId);
            }
        },
        translateUnit(element, data, event){
            console.log(data)
            if(element=="coment"){
                if(data>=1000000){
                    data/=1000000;
                data=Math.floor(data*10)/10+'M';
            }
            else if(data>=1000 && data<1000000){
                data/=1000;
                data=Math.floor(data*10)/10+'K';
            }
                const returnVal=data;
                console.log(returnVal)
            return{
                returnVal,
            }
            }
            else if(element=="like"){
            if(data>=1000000){
                data/=1000000;
                data=Math.floor(data*10)/10+'M';
            }
            else if(data>=1000 && data<1000000){
                data/=1000;
                data=Math.floor(data*10)/10+'K';
            }const returnVal=data;
            return{
                returnVal,
            }
            }
        else{
            if(data>=1000000){
                data/=1000000;
                data=Math.floor(data*10)/10+'M';
            }
            else if(data>=1000 && data<1000000){
                data/=1000;
                data=Math.floor(data*10)/10+'K';
            }const returnVal=data;
            return{
                returnVal,
            }
        }
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
#left,#right,#loading-guide {
    height:100%;
}
div#loading-guide {
    display:flex;
    flex-direction:column;
    transition:0.3s;
    padding:0 40px;
    width:800px;
    .loading.icon {
        margin:auto;
    }
    .space {
        width:700px;
    }
}
#left {
    flex-grow:1;
    position:relative;
    background-color:#000000;
    .close {
        z-index:100;
        img {
            width:32px;
            height:32px;
        }
        position:absolute;
        left:10px;
        top:20px;
        border:transparent;
        background-color: transparent;
        cursor:pointer;
    }
    .short-meta-info {
        z-index:100;
        position:absolute;
        right:10px;
        top:20px;
        font-size:0.5rem;
        display:inline-flex;
        flex-direction:row;
        margin-bottom:20px;
    }
    #short-video {
        display:flex;
        flex-direction:row;
        justify-content: center;
    }
    .video-zone {
        display:flex;
        flex-direction:row;
        justify-content: center;
        height:100%;
    }
    #short-video{
        width:100%;
        height:100%;
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
}
#right {
    display:flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    padding:0 40px;
    width:800px;
    & > * {
        width:700px;
        margin:0 auto;
    }
    #short-title{
        font-weight: bold;
        margin-top:30px;
        margin-bottom:30px;
        padding-right:10px;
    }
    .channel{
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-right:10px;
        margin-bottom:20px;
        .channel-info{
            display:flex;
            flex-direction: row;
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
        padding-right:10px;
        .tag-list {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
        }
    }
    .slider {
        margin:0 auto;
        margin-bottom:20px;
        padding-right:10px;
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
        height:36px;
        font-size: 20px;
        border:1px solid var(--background-color);
        border-radius:20px;
        padding:4px 16px;
        margin-right:10px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        background-color:var(--background-color);
        & > * {
            margin:auto 0;
        }
        .icon {
            color:var(--error-color);
            margin-right:10px;
        }
        small {
            margin:auto 0;
        }
    }
    .comment{
        height:36px;
        font-size: 20px;
        border-radius:20px;
        border:1px solid var(--background-color);
        padding:4px 16px;
        margin-right:10px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color:var(--background-color);
        & > * {
            margin:auto 0;
        }
        .icon {
            margin-right:10px;
        }
        small {
            margin:auto 0;
        }
    }
    .view{
        height:36px;
        font-size: 20px;
        border-radius:20px;
        border:1px solid var(--background-color);
        padding:4px 16px;
        margin-right:10px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color:var(--background-color);
        & > * {
            margin:auto 0;
        }
        .icon {
            margin-right:10px;
        }
    }
}
</style>
