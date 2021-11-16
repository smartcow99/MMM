<template>
    <div @click="openShort(shortInfo)">
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
        ...mapMutations([
            'openShort'
        ]),
    }
}
</script>

<style>

</style>