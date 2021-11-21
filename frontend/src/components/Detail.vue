<template>
    <div class="detail">
        <div class="view-box" :class="{'folded':isFold}">
            <slot/>
            <div class="fade-transparent"></div>
        </div>
        <Btn v-if="isFold" @click="spread">자세히보기</Btn>
        <Btn v-else @click="fold">접기</Btn>
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
    padding:20px;
    overflow:hidden;
    position: relative;
    height:fit-content;
    margin-bottom:50px;
}
.detail .fade-transparent {
    position:absolute;
    width:100%;
    height:100px;
    bottom:0;
    background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));
}
.detail .view-box.folded {
    
    height:300px;
}
</style>