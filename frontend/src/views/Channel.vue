<template>
    <div>
        <div class="channel-info">
            <img :src="currentChannel['profile']" alt="채널 프로필"/>
            {{currentChannel['title']}}
            <span>구독자 수 {{currentChannel['numOfSubscribers']}} | shorts {{currentChannel['numOfShorts']}}</span>
            <div>{{currentChannel['introduce']}}</div>
            <Btn v-if="currentChannel['isSubscribed']" @click="subscribe">구독 취소</Btn>
            <Btn v-else @click="unsubscribe">구독</Btn>
        </div>
        <Detail v-if="currentChannel['channelId']==userInfo['channelId']">
            <template v-slot:summary>
                <h3>{{`'${currentChannel['title']}'님의 화장대`}}</h3>
            </template>
            <div class="product-list"
                v-for="(productList,key) of currentChannel['dressingTable']"
                :key="key"
            >
                {{key}}
                <DeleteBox @delete="deleteProduct"
                    v-for="(product,index) in productList"
                    :key="index">
                    <ProductMini
                        :img="product.img"
                        :productId="product.productId"
                        :title="product.title"
                    />
                </DeleteBox>
            </div>
        </Detail>
        <Detail v-else>
            <template v-slot:summary>
                <h3>{{`'${currentChannel['title']}'님의 화장대`}}</h3>
            </template>
            <div class="product-list"
                v-for="(productList,key) of currentChannel['dressingTable']"
                :key="key"
            >
                {{key}}
                <ProductMini
                    v-for="(product,index) in productList"
                    :key="index"
                    :img="product.img"
                    :productId="product.productId"
                    :title="product.title"
                />
            </div>
        </Detail>
        <div v-if="currentChannel['channelId']==userInfo['channelId']">
            쇼츠 가로 3개씩 나오도록 만들것
            <div id="shortList">
            <DeleteBox @delete="deleteShort"
                v-for="(short,index) in currentChannel['shortList']"
                :key="index">
                <ShortSummary
                    :shortInfo="short">
                </ShortSummary>
            </DeleteBox>
            </div>
        </div>
        <div v-else>
            쇼츠 가로 3개씩 나오도록 만들것
            <div id="shortList">
                <ShortSummary
                    v-for="(short,index) in currentChannel['shortList']"
                    :key="index"
                    :shortInfo="short">
                </ShortSummary>
            </div>
        </div>
    </div>
</template>

<script>
import Detail from '../components/Detail.vue'
import { mapActions, mapState } from 'vuex';
import ShortSummary from '../components/ShortSummary.vue';
import ProductMini from '../components/ProductMini.vue';
import DeleteBox from '../components/DeleteBox.vue';
export default {
    name:'Channel',
    components: { Detail, ShortSummary, ProductMini, DeleteBox },
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
            alert('데모 아이디로는 상품을 삭제할 수 없습니다.')
        },
        deleteShort() {
            alert('데모 아이디로는 영상을 삭제할 수 없습니다.')
        },
        subscribe() {
            this.requestSubscribe(this.currentChannel['channelId']);
            this.requestChannelInfo(this.currentChannel['channelId']);
        },
        unsubscribe() {
            this.requestUnsubscribe(this.currentChannel['channelId']);
            this.requestChannelInfo(this.currentChannel['channelId']);
        }
    },
    mounted() {
        this.requestChannelInfo(this.$route.query['channelId']);
    },
    watch: {
        '$route' () {
            if(!!this.$route.query['channelId']) {
                this.requestChannelInfo(this.$route.query['channelId']);
            }
        },
    }
}
</script>

<style>
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
</style>