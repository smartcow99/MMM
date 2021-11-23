<template>
    <div class="page">
        <Menubar/>
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
h2.search-text {
  text-align:left;
}
</style>