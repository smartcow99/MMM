<template>
    <div id="product-search">
        <h2 class="search-text">'{{$route.query['content']}}' 검색 결과</h2>
        <div class="sort-option">
            <label v-for="(value,index) in sortType" :key="index">
                <input type="checkbox" :checked="sortType[index].isChecked" @change="sorting(index,value.type)"/>
                {{value.title}}
            </label>
        </div>
        <div class="product-list">
            <ProductSummary 
                class="item"
                v-for="(value,index) in productList" 
                :key="index" 
                :productInfo="value"
            />
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
                    type:'view',
                    isChecked:false
                },
                {
                    title:'낮은 가격 순',
                    type:'low-price',
                    isChecked:false
                },
                {
                    title:'높은 가격 순',
                    type:'high-price',
                    isChecked:false
                }
            ],
        }
    },
    computed: {
        ...mapState([
            'productList'
        ])
    },
    methods: {
        ...mapMutations([
            'sortProductList'
        ]),
        ...mapActions([
            'requestSearch',
        ]),
        sorting(index,type) {
            this.sortType.forEach(el=>el.isChecked=false);
            this.sortType[index].isChecked = true;
            this.sortProductList({type});
        }
    },
}
</script>

<style>
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
    margin-right:40px;
}
</style> 
