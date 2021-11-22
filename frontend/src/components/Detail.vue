<template>
    <div class="detail">
        <div class="view-box" :class="{'folded':isFold}">
            <slot/>
            <div class="empty"></div>
            <div class="fade-transparent"></div>
        </div>
        <Btn class="fold-button" v-if="isFold" @click="spread">자세히보기</Btn>
        <Btn class="fold-button" v-else theme="gray" @click="fold">접기</Btn>
    </div>

</template>

<script>
import Btn from './Btn.vue'
export default {
  components: { Btn },
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
.detail .view-box {
    border:1px solid var(--placeholder-color);
    border-radius:4px;
    padding:30px 20px;
    overflow:hidden;
    position: relative;
    height:fit-content;
    margin-bottom:20px;
}
.detail .fade-transparent {
    position:absolute;
    width:100%;
    height:100px;
    bottom:0;
    background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));
    z-index:20;
}
.detail .view-box.folded {
    height:300px;
}
.detail .fold-button {
    width:100%;
}
div.empty {
    height:100px;
}
</style>