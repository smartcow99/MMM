<template>
    <div class="detail">
        <div class="view-box" :class="{'folded':isFold}">
            <slot/>
        </div>
        <Btn v-if="isFold" theme="primary" @click="spread" :disabled="!foldable">자세히보기</Btn>
        <Btn v-else theme="gray" @click="fold" :disabled="!foldable">접기</Btn>
    </div>

</template>

<script>
import Btn from './Btn.vue'
export default {
    components: { Btn },
    props: { 
        foldable: {
            type:Boolean,
            default() {
                return true;
            }
        }
    },
    data() {
        return {
            isFold:true
        }
    },
    methods: {
        spread() {
            this.isFold = false;
        },
        fold() {
            this.isFold = true;
        }
    }
}
</script>

<style scoped>
.detail {
    border:1px solid var(--placeholder-color);
    border-radius:4px;
    padding:30px 20px 10px 20px;
}
.detail .view-box {
    overflow:hidden;
    position: relative;
    height:fit-content;
    padding-top:20px;
}
.detail .view-box.folded {
    height:300px;
}
button {
    width:100%;
}
</style>