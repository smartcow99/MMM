<template>
    <div class="upload-box">
        <font-awesome-icon icon="upload"/>
        <div>{{explain}}</div>
    </div>
</template>

<script>
//todo: 이미지 드래그해서 hover시 애니메이션, 
export default {
    props: {
        explain:String
    }
}
</script>

<style>
.upload-box {
    border:1px dashed var(--placeholder-color);
}
</style>