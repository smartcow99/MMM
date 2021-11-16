<template>
    <div>
        shorts search
        <ShortSummary v-for="(value,index) in shortList" :key="index"/>
    </div>
</template>

<script>
import ShortSummary from '../components/ShortSummary.vue'
import {mapState} from 'vuex'
export default {
    name: 'ShortSearch',
    components: { ShortSummary },
    data() {
        return {
            shortList
        }
    },
    computed: {
        ...mapState([
            'shortsList'
        ])
    }
}
</script>

<style>

</style>