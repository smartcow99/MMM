<template>
    <div>
        <!--image viewer-->
        <ImageViewer :imageList="currentProduct['productImages']"></ImageViewer>
        <div class="product-info">
            <div>
                <span>상품명</span>
                <span>{{currentProduct['productInfo'].title}}</span>
            </div>
            <button @click="openPurchasePage">구매</button>
            <BlurCard v-if="purchasePageOn" @close="closePurchase">
                <Purchase/>
            </BlurCard>
            <div>
                <span>제조사</span>
                <span>{{currentProduct['productInfo'].manufacturer}}</span>
            </div>
            <div>
                <span>평점</span>
                {{currentProduct['productInfo'].rate}}
                <span><StarRating :rate="currentProduct['productInfo'].rate"></StarRating></span>
            </div>
            <div>
                <span>가격</span>
                <span>{{currentProduct['productInfo'].price}} 
                    <font-awesome-icon icon="won-sign"/>
                </span>
            </div>
            <div>
                <span>조회수</span>
                <span>{{currentProduct['productInfo'].views}}</span>
            </div>
        </div>
        <Detail>
            상품상세설명
            <div v-html="currentProduct['productExplainHtml']"></div>
        </Detail>
        <Slider 
            class="related-shorts"
            :count="3"
            :elWidth="200"
            :maxIndex="currentProduct['reviews'].length">
            <ShortSummary 
                v-for="(short,index) in currentProduct['relatedShorts']"
                :key="index"
                :shortInfo="short"
            />
        </Slider>
        <div class="reviews">
            <Review 
                v-for="(review,index) in currentProduct['reviews']"
                :key="index"
                :reviewInfo="review"/>
                <button @click="addComment">댓글 쓰기</button>
            <BlurCard v-if="addCommentPageOn" @close="closeAddComment">
                <WriteReview/>
            </BlurCard>
        </div>
    </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
import Detail from '../components/Detail.vue'
import Review from '../components/Review.vue';
import Slider from '../components/Slider.vue';
import ShortSummary from '../components/ShortSummary.vue';
import ImageViewer from '../components/ImageViewer.vue';
import StarRating from '../components/StarRating.vue';
import BlurCard from '@/components/BlurCard.vue'
import Purchase from '@/components/widget/Purchase.vue'
import WriteReview from '@/components/widget/WriteReview.vue'
export default {
    components: { Detail, Slider,Review, ShortSummary, ImageViewer, StarRating },
    name:'Product',
    computed: {
        ...mapState([
            'currentProduct'
        ])
    },
    methods: {
        ...mapActions([
            'requestProductInfo'
        ]),
        openPurchasePage(){
            this.purchasePageOn=true;
        },
        addComment(){
            this.addCommentPageOn=true;
        },
        closePurchase(){
            this.purchasePageOn=false;
        },
        closeAddComment(){
            this.addCommentPageOn=false;
        }
    },
    mounted(){
        if(!!this.$route.query['productId']) {
            this.requestProductInfo(this.$route.query['productId']);
        }
    },
    // watch: {
    //     '$route':{
    //         handler(to,from){
    //             console.log(this.$route)
    //             if(!!this.$route.query['productId']) {
    //                 this.requestProductInfo(this.$route.query['productId']);
    //             }
    //         }
    //     }
    // }
    data(){
        return{
            purchasePageOn:false,
            addCommentPageOn:false,
        }
    },
    
    components:{
        BlurCard,
        Purchase,
        WriteReview,
    }
}
</script>

<style>

</style>