<template>
    <div class="loading-guide page" v-show="currentProduct['productId']===0">
        <font-awesome-icon class="loading icon" icon='spinner' spin/>
    </div>
    <div id="product" class="page" v-show="currentProduct['productId']>0">
        <ImageViewer class="image-viewer" :imageList="currentProduct['productImages'] || []"></ImageViewer>
        <table class="product-info">
            <tr>
                <td>상품명</td>
                <td>{{currentProduct['title'] || ''}}</td>
            </tr>
            <tr>
                <td>제조사</td>
                <td>{{currentProduct['manufacturer'] || ''}}</td>
            </tr>
            <tr>
                <td>평점</td>
                <td>
                    <StarRating :rate="currentProduct['rate'] || 0"/>
                    <small>({{currentProduct['rate'] || 0}})</small>
                </td>
            </tr>
            <tr>
                <td>가격</td>
                <td>
                    {{currentProduct['price'] ||0}} 원
                </td>
            </tr>
            <tr>
                <td>조회수</td>
                <td>{{currentProduct['views'] || 0}}</td>
            </tr>
        </table>
        <Detail class="product-explain">
            <div>
                <img id="explain-html" :src="currentProduct['productExplainHtml']"/>
            </div>
        </Detail>
        <h2 class="related-shorts-title">shorts</h2>
        <Slider 
            class="related-shorts"
            :count="3"
            :elWidth="300"
            :maxIndex="currentProduct['relatedShorts'].length">
            <ShortSummary
                class="short" 
                v-for="(short,index) in currentProduct['relatedShorts']"
                :key="index"
                :shortInfo="short"
            />
        </Slider>
        <h2 class="reviews-title">사용 후기</h2>
        <div class="reviews">
            <div class="sort-option">
                <label v-for="(value,index) in sortType" :key="index">
                    <input type="checkbox" :checked="sortType[index].isChecked" @change="sorting(this.currentProduct.productId,index,value.type)"/>
                    {{value.title}}
                </label>
            </div>
            <Btn class="write-review-button" @click="addComment">리뷰 쓰기</Btn>
            <Review 
                class="review"
                v-for="(review,index) in currentProduct['reviews']"
                :key="index"
                :reviewInfo="review"
            />
            <BlurCard v-if="addCommentPageOn" @close="closeAddComment">
                <WriteReview/>
            </BlurCard>
        </div>
    </div>
    <BlurCard v-if="purchasePageOn" @close="closePurchase">
        <Purchase/>
    </BlurCard>
    <div class="purchase-guide" :class="{hidden:guideHide}" ref="guide" v-show="currentProduct['productId']>0">
        <button class="guide-control" @click="hideGuide">
            <font-awesome-icon v-if="guideHide" icon="arrow-up"/>
            <font-awesome-icon v-else icon="arrow-down"/>
        </button>
        <img class="product-image" :src="currentProduct['productImages'][0]"/>
        <div class="product-info">
            <h2>{{currentProduct['title']}}</h2>
            <p>{{currentProduct['price']}} 원</p>
        </div>
        <Btn class="purchase-button" @click="openPurchasePage">구매</Btn>
    </div>
</template>


<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Btn from '../components/Btn.vue';
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
    name:'Product',
    components: { Btn, Detail, Slider,Review, ShortSummary, ImageViewer, StarRating, BlurCard, Purchase, WriteReview },
    data(){
        return{
            purchasePageOn:false,
            addCommentPageOn:false,
            guideHide:false,
            sortType:[
                {
                    title:'높은 별점 순',
                    type:'high-rate',
                    isChecked:true
                },
                {
                    title:'낮은 별점 순',
                    type:'low-rate',
                    isChecked:false
                },
            ],
        }
    },
    computed: {
        ...mapState([
            'currentProduct',
            'userInfo'
        ])
    },
    methods: {
        ...mapMutations([
            'setLoginPageOn',
            'sortReviewList',
            'setSortDesc',
            'isDesc',
        ]),
        ...mapActions([
            'requestProductInfo',
            'requestReviewSort',
            'requestHasPurchaseHistory'
        ]),
        openPurchasePage(){
            if(this.userInfo['isLogined']===true) {
                this.purchasePageOn=true;
            }
            else {
                alert('로그인을 해야 서비스를 이용할 수 있습니다.');
                this.setLoginPageOn(true);
            }
        },
        addComment(){
            if(this.userInfo['isLogined']===true) {
                //해당 유저가 이 물품을 구매한적 있는지 먼저 확인할 것
                if(this.requestHasPurchaseHistory(this.currentProduct.productId)) {
                    this.addCommentPageOn=true;
                }
                else {
                    alert('상품을 구매한 유저만 리뷰를 쓸 수 있습니다.');
                }
                
            }
            else {
                alert('로그인을 해야 서비스를 이용할 수 있습니다.');
                this.setLoginPageOn(true);
            }
        },
        closePurchase(){
            this.purchasePageOn=false;
        },
        closeAddComment(){
            this.addCommentPageOn=false;
        },
        hideGuide() {
            if(this.guideHide){
                this.guideHide=false;
            }
            else {
                this.guideHide=true;
            }
        },
        sorting(pid,index,type) {
            this.sortType.forEach(el=>el.isChecked=false);
            this.sortType[index].isChecked = true;
            type=='high-rate'?this.setSortDesc(true):this.setSortDesc(false),
            this.requestReviewSort({pid, type});
        }
    },
}
</script>

<style lang="scss" scoped>
.image-viewer {
    margin-top:60px;
}
table.product-info {
    border:1px solid var(--placeholder-color);
    border-radius:4px;
    width:100%;
    padding:10px 20px;
    margin:20px 0;
    tr {
        height:40px;
        td {
            font-size:1.1rem;
            font-weight:bold;
        }
    }
}
.product-explain {
    margin: 10px 0;
}
h2.related-shorts-title {
    margin-top:100px;
}
.related-shorts {
    width:100%;
    .short {
        margin-right:20px;
    }
}
h2.reviews-title {
    margin-top:100px;
}
div.reviews {
    .sort-option {
        margin-bottom:20px;
    }
    .write-review-button{
        margin-bottom:20px;
    }
    .review {
        margin-bottom:20px;
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
div.purchase-guide {
    position:fixed;
    background-color:var(--background-color);
    border-top-left-radius:16px;
    border-top-right-radius:16px;
    padding:20px;
    box-shadow:0px 0px 4px #999999;
    bottom:0;
    margin-left:40px;
    height:140px;
    width:980px;
    z-index:50;
    transition:0.3s;
    display:flex;
    button.guide-control {
        width:40px;
        height:40px;
        position:absolute;
        top:-50px;
        left:50%;
        margin-left:-20px;
        border:none;
        background-color:var(--background-color);
        border-radius:50%;
        box-shadow:0px 0px 4px #999999;
        font-size:1.2rem;
    }
    img {
        width:100px;
        height:100px;
    }
    div.product-info {
        display:flex;
        flex-direction:column;
        flex-grow:1;
        padding-left:20px;
        h2 {
            margin:0;
        }
    }
    .purchase-button {
        height:40px;
        width:100px;
    }
    &.hidden {
        transform:translateY(120px);
    }
}
#explain-html {
    width:100%;
}
</style>