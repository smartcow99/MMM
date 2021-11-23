<template>
    <div class="review">
        <star-rating class="rate" :rate="reviewInfo['rate']"/>
        <div class="review-head">
            <img :src="reviewInfo['profile']"/>
            <h3>{{reviewInfo['name']}}</h3>
        </div>
        <div class="review-content">
            <p>{{reviewInfo['content']}}</p>
            <img v-if="reviewInfo['photo']!==''" class="photo-review" :src="reviewInfo['photo']"/>
        </div>
    </div>
</template>

<script>
import StarRating from './StarRating.vue'
export default {
    name:'Review',
    components: { StarRating },
    props:{
        'reviewInfo':Object
    }
}
</script>

<style scoped>
div.review {
    border:1px solid var(--placeholder-color);
    border-radius:4px;
    padding:20px;
}
div.review-head {
    margin-top:8px;
    display:flex;
    flex-direction:row;
}
div.review-head img {
    width:40px;
    height:40px;
    border-radius:50%;
    margin:auto 0
}
div.review-head h3 {
    margin:auto 10px
}
div.review-content {
    display:flex;
}
div.review-content p {
    flex-grow:1;
}
img.photo-review {
    width:100px;
    height:100px;
}
</style>