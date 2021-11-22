<template>
    <article>
        <Menubar/>
        <h2 class="search-text">'{{$route.query['content']}}' 검색 결과</h2>
        <router-view/>
    </article>
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