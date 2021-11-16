<template>
    <div class="recommend-tags">
        <h3>추천 태그</h3>
        <Tag v-for="(value,index) in tagList" :key="index">
            {{value}}    
        </Tag>  
    </div>
</template>

<script>
import Tag from '@/components/Tag.vue'
export default {
    name: 'RecommendTag',
    props: {
        tagList: Array
    },
    components: {
        Tag
    }
}
</script>

<style>

</style>