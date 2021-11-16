<template>
    <div>
        search
        <router-link :to="{ path:'/search', query:{ 'type':'short','content': $route.query['content']} }">
            쇼츠
        </router-link>
        <router-link :to="{ path:'/search/channels', query:{ 'type':'channel','content': $route.query['content']}}">
            채널
        </router-link>
        <router-link :to="{ path:'/search/products', query:{ 'type':'product','content': $route.query['content']}}">
            상품
        </router-link>
        {{$route.query}}
        <router-view/>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>