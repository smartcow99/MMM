<template>
    <div @click="openShort">
        shorts info
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    props:{
        shortInfo: Object
    },
    computed: {
        ...mapState([

        ])
    },
    methods: {
        ...mapActions([
            'requestShort'
        ]),
        openShort() {
            //this.requestShort('short ID');//shortInfo에서 알 수 있는 shortID정보
        }
    }
}
</script>

<style>

</style>