<template>
    <div class="loading-guide page" v-show="currentChannel['channelId']===0">
        <font-awesome-icon class="loading icon" icon='spinner' spin/>
    </div>
    <div id="channel" class="page" v-show="currentChannel['channelId']>0">
        <div v-if="currentChannel['isMyChannel']" class="channel-summary">
            <img :src="currentChannel['profile']" alt="채널 프로필"/>
            <div class="channel-info">
                <div class="channel-title">
                    <input type="text" class="modify-title" v-if="isModifyOn" v-model="modifyTitle"/>
                    <h2 v-else>{{currentChannel['title']}}</h2>
                    <Btn class="subscribe-button" theme="white" v-if="isModifyOn" @click="saveModify">저장하기</Btn>
                    <Btn class="subscribe-button" theme="white" v-else @click="modifyOn()">수정하기</Btn>

                </div>
                <small class="channel-meta">
                    <span>구독자 수 {{currentChannel['numOfSubscribers']}} | shorts {{currentChannel['numOfShorts']}}</span>
                </small>
                <textarea v-if="isModifyOn" class="modify-intro" v-model="modifyIntro" ></textarea>
                <small v-else class="channel-intro">{{currentChannel['introduce']}}</small>
            </div>
        </div>
        <div v-else class="channel-summary">
            <img :src="currentChannel['profile']" alt="채널 프로필"/>
            <div class="channel-info">
                <div class="channel-title">
                    <h2>{{currentChannel['title']}}</h2>
                    <Btn class="subscribe-button" theme="gray" v-if="currentChannel['isSubscribed']" @click="unsubscribe">구독 취소</Btn>
                    <Btn class="subscribe-button" v-else @click="subscribe">구독</Btn>
                </div>
                <small class="channel-meta">
                    <span>구독자 수 {{currentChannel['numOfSubscribers']}} | shorts {{currentChannel['numOfShorts']}}</span>
                </small>
                <small class="channel-intro">{{currentChannel['introduce']}}</small>
            </div>
        </div>
        <div class="dress-table">
            <h3>{{`'${currentChannel['title']}' 님의 화장대`}}</h3>
            <Btn v-if="currentChannel['isMyChannel']" @click="modifyDressingTable" theme="white">수정하기</Btn>
        </div>
        <Detail v-if="currentChannel['isMyChannel']" :foldable="currentChannel['haveItem']!==false">
            <div v-if="currentChannel['haveItem']===false">
                화장대에 아이템이 없습니다.
            </div>
            <div v-else class="product-box">
                <div class="product-list"
                    v-for="(productList,key) of currentChannel['dressingTable']"
                    :key="key"
                >
                    <div class="product-category">{{key}}</div>
                    <div class="product-items">
                        <DeleteBox 
                            class="item"
                            @delete="deleteProduct"
                            v-for="(product,index) in productList"
                            :key="index">
                            <ProductMini
                                :img="product.img"
                                :productId="product.productId"
                                :title="product.title"
                            />
                        </DeleteBox>
                    </div>
                </div>
            </div>
        </Detail>
        <Detail v-else :foldable="currentChannel['haveItem']!==false">
            <div v-if="currentChannel['haveItem']===false">
                화장대에 아이템이 없습니다.
            </div>
            <div v-else class="product-box">
                <div class="product-list"
                    v-for="(productList,key) of currentChannel['dressingTable']"
                    :key="key"
                >
                    <div class="product-category">{{key}}</div>
                    <div class="product-items">
                        <ProductMini
                            class="item"
                            v-for="(product,index) in productList"
                            :key="index"
                            :img="product.img"
                            :productId="product.productId"
                            :title="product.title"
                        />
                    </div>
                </div>
            </div>
        </Detail>
        <div id="shortList" v-if="currentChannel['isMyChannel']">
            <DeleteBox 
                class="item"
                @delete="deleteShort"
                v-for="(short,index) in currentChannel['shortList']"
                :key="index">
                <ShortSummary
                    :shortInfo="short">
                </ShortSummary>
            </DeleteBox>
        </div>
        <div id="shortList" v-else>
            <ShortSummary
                class="item"
                v-for="(short,index) in currentChannel['shortList']"
                :key="index"
                :shortInfo="short">
            </ShortSummary>
        </div>
    </div>
</template>

<script>
import Btn from '../components/Btn.vue';
import Detail from '../components/Detail.vue'
import { mapActions, mapState } from 'vuex';
import ShortSummary from '../components/ShortSummary.vue';
import ProductMini from '../components/ProductMini.vue';
import DeleteBox from '../components/DeleteBox.vue';
import ChannelSummary from '../components/ChannelSummary.vue';
export default {
    name:'Channel',
    components: { Btn, Detail, ShortSummary, ProductMini, DeleteBox, ChannelSummary },
    data() {
        return {
            isModifyOn:false,
            modifyTitle:'',
            modifyIntro:'',
        }
    },
    computed: {
        ...mapState([
            'userInfo',
            'currentChannel'
        ])
    },
    methods: {
        ...mapActions([
            'requestChannelInfo',
            'requestSubscribe',
            'requestUnsubscribe'
        ]),
        deleteProduct() {
            alert('데모 계정에서는 상품을 삭제할 수 없습니다.')
        },
        deleteShort() {
            alert('데모 계정에서는 영상을 삭제할 수 없습니다.')
        },
        subscribe() {
            alert('데모 계정으로는 구독이 불가능합니다.')
            // this.requestSubscribe(this.currentChannel['channelId']);
            // this.requestChannelInfo(this.currentChannel['channelId']);
        },
        unsubscribe() {
            alert('데모 계정으로는 구독 취소가 불가능합니다.')
            // this.requestUnsubscribe(this.currentChannel['channelId']);
            // this.requestChannelInfo(this.currentChannel['channelId']);
        },
        modifyOn() {
            alert('데모 계정에서는 프로필 변경이 불가능합니다.')
            // this.isModifyOn = true;
            // this.modifyTitle = this.currentChannel['title'];
            // this.modifyIntro = this.currentChannel['introduce'];
        },
        saveModify() {
            this.isModifyOn = false;
        },
        modifyDressingTable() {
            alert('데모 계정에서는 \'나의 화장대\' 변경이 불가능합니다.')
        }
    }
}
</script>

<style lang="scss" scoped>
.product-list {
    display:flex;
    flex-direction:row;
}
#shortList{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    margin: 50px auto;
}
div.channel-summary {
    display:flex;
    flex-direction:row;
    img {
        width:160px;
        height:160px;
        padding:20px;
        border-radius:50%;
    }
    div.channel-info {
        flex-grow:1;
        display:flex;
        flex-direction:column;
        div.channel-title {
            margin-top:20px;
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            h2 { 
                text-align:left;
                margin: 0;
                flex-grow:1;
            }
            input.modify-title {
                width:400px;
            }
            .subscribe-button {
                width:100px;
            }
        }
        small.channel-meta {
            text-align:left;
            margin-bottom:10px;
        }
        small.channel-intro {
            text-align:left;
        }
        textarea.modify-intro {
            height:150px;
            width:600px;
        }
    }
}
div.dress-table {
    display:flex;
    flex-direction:row;
    height:40px;
    margin-bottom:20px;
    & > * {
        margin:auto 0;
    }
    h3 {
        flex-grow:1;
    }
    button {
        width:100px;
    }
}
div.product-box {
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    div.product-list {
        display:flex;
        flex-direction:row;
        margin-bottom:40px;
        div.product-category {
            width:100px;
        }
        div.product-items {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            height:100px;
            .item {
                margin-right:20px;
                &:hover {
                    background-color: var(--background-color-darken);
                }
            }
        }
    }
}
div#shortList {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    margin: 50px 0;
    width:100%;
    .item {
        margin-right:40px;
        margin-bottom:60px;
    }
}
div.loading-guide {
    transition:0.3s;
    display:flex;
    flex-direction:row;
    height:100%;
    width:100%;
    .loading.icon {
        margin:0 auto;
        margin-top:200px;
    }
}
</style>