<template>
    <div>
        {{currentChannel['title']}}
        <Detail>
            채널정보
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
        <div>
            쇼츠 가로 3개씩 나오도록 만들것
            <ShortSummary
                v-for="(short,index) in currentChannel['shortList']"
                :key="index"
                :shortInfo="short">
            </ShortSummary>
        </div>
    </div>
</template>

<script>
import Detail from '../components/Detail.vue'
import { mapActions, mapState } from 'vuex';
import ShortSummary from '../components/ShortSummary.vue';
import ProductMini from '../components/ProductMini.vue';
export default {
    name:'Channel',
    components: { Detail, ShortSummary, ProductMini },
    computed: {
        ...mapState([
            'currentChannel'
        ])
    },
    methods: {
        ...mapActions([
            'requestChannelInfo'
        ])
    },
    mounted() {
        this.requestChannelInfo(this.$route.query['channelId']);
    }
}
</script>

<style>
.product-list {
    display:flex;
    flex-direction:row;
}
</style>