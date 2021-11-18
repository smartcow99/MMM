<template>
    <div>
        <img :src="reviewInfo['profile']"/>
        <h3>{{reviewInfo['name']}}</h3>
        <p>{{reviewInfo['content']}}</p>
        <star-rating :rate="reviewInfo['rate']"/>
        <img v-if="reviewInfo['photo']!==''" :src="reviewInfo['photo']"/>
    </div>
</template>

<script>
import StarRating from './StarRating.vue'
export default {
  components: { StarRating },
    name:'Review',
    props:{
        'reviewInfo':Object
    }
}
</script>

<style>

</style>