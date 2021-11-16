<template>
    <div class="product-slider">
        <button @click="showLeft">
            <font-awesome-icon icon="angle-left"/>
        </button>
        <div class="view-box">
            <ProductMini
                v-for="(value,index) in viewProduct"
                :key="index"
                :title="value.title"
                :img="value.img"
                :productId="value.productId"
            />
        </div>
        <button @click="showRight">
            <font-awesome-icon icon="angle-right"/>
        </button>
    </div>
</template>

<script>
import ProductMini from './ProductMini.vue'

export default {
    components: { ProductMini },
    props: {
        'productList':Array
    },
    data() {
        return {
            viewProduct:[],
            leftIndex:0,
            rightIndex:3
        }
    },
    mounted() {
        this.viewProduct = this.productList.slice(this.leftIndex,this.rightIndex);
    },
    updated() {
        this.viewProduct = this.productList.slice(this.leftIndex,this.rightIndex);
    },
    methods: {
        showLeft() {
            if(this.leftIndex!=0) {
                this.leftIndex--;
                this.rightIndex--;
                this.viewProduct = this.productList.slice(this.leftIndex,this.rightIndex);
            }
        },
        showRight() {
            console.log(this.productList,this.viewProduct,this.leftIndex,this.rightIndex)
            if(this.rightIndex+1<this.productList.length) {
                this.rightIndex++;
                this.leftIndex++;
                this.viewProduct = this.productList.slice(this.leftIndex,this.rightIndex);
            }
        }
    }

}
</script>

<style scoped>
.product-slider {
    display:flex;
    flex-direction:row;
}
.product-slider .view-box {
    flex-grow:1;
    display:flex;
    flex-direction: row;
    justify-content: center;
}
</style>