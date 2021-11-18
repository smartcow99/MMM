<template>
    <div class="short-summary" @click="openShort(shortInfo)">
        {{shortInfo['title']}}
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    props:{
        shortInfo: Object
    },
    methods: {
        ...mapActions([
            'requestShortInfo'
        ]),
        ...mapMutations([
            'setShortPageOn'
        ]),
        openShort(shortInfo) {
            this.requestShortInfo(shortInfo);
            this.setShortPageOn(true);
        }
    }
}
</script>

<style>
.short-summary {
    border:1px solid #cccccc;
}
</style>