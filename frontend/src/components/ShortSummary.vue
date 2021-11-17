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
        ...mapMutations([
            'openShort'
        ]),
    }
}
</script>

<style>
.short-summary {
    border:1px solid #cccccc;
}
</style>