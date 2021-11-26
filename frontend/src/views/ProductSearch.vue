<template>
    <div id="product-search">
        <h2 class="search-text">'{{$route.query['content']}}' 검색 결과</h2>
        <div class="sort-option">
            <label v-for="(value,index) in sortType" :key="index">
                <input type="checkbox" :checked="sortType[index].isChecked" @change="sorting(index,value.type)"/>
                {{value.title}}
            </label>
        </div>
        <div class="product-list" v-show="productList.length>0">
            <ProductSummary 
                class="item"
                v-for="(value,index) in productList" 
                :key="index" 
                :productInfo="value"
            />
        </div>
        <div class="loading-guide" v-if="isSearchLoading==='loading'">
            <font-awesome-icon class="loading icon" icon='spinner' spin/>
            <div class="space"></div>
            <p class="guide-text">loading</p>
        </div>
        <div class="loading-guide" v-else-if="isSearchLoading==='end'">
            <p>더 이상 불러올 컨텐츠가 없습니다.</p>
        </div>
        <div class="product-list" v-show="productList.length===0">
            <b>결과 없음</b>
        </div>
    </div>
</template>

<script>
import ProductSummary from '../components/ProductSummary.vue'
import {mapState,mapActions, mapMutations} from 'vuex'
export default {
    name: 'ProductSearch',
    components: { ProductSummary },
    data() {
        return {
            sortType:[
                {
                    title:'별점 순',
                    type:'rate',
                    isChecked:true
                },
                {
                    title:'조회수 순',
                    type:'access',
                    isChecked:false
                },
                {
                    title:'낮은 가격 순',
                    type:'price',
                    isChecked:false
                },
                {
                    title:'높은 가격 순',
                    type:'price_desc',
                    isChecked:false
                }
            ],
        }
    },
    computed: {
        ...mapState([
            'productList',
            'searchOrder',
            'isSearchLoading'
        ])
    },
    methods: {
        ...mapMutations([
            'sortProductList',
            'setSearchOrder',
        ]),
        ...mapActions([
            'requestSearch',
            'requestProductSort',
        ]),
        sorting(index,type) {
            const content=this.$route.query['content'];
            this.sortType.forEach(el=>el.isChecked=false);
            this.sortType[index].isChecked = true;
            this.requestProductSort({content,type});
            this.setSearchOrder(type);
        }
    },
}
</script>

<style scoped>
div.product-list{
    margin-top:20px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
}
.sort-option {
    display:flex;
    flex-direction:row;
}
.sort-option label {
    margin-right:10px;
}
.item {
    margin-right:30px;
    margin-bottom:100px;
    width:280px;
}
.loading-guide p {
    margin:0 auto;
    text-align:center;
}
</style> 
