<template>
    <div>
        search

        <Menubar/>
        {{$route.query}}
        <router-view/>
    </div>
</template>

<script>
import Menubar from '../components/Menubar.vue'
export default {
  components: { Menubar },

}
</script>

<style>

</style>