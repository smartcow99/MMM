<template>
    <div id="analytic">
        <div class="analytics">
            <UploadBox :explain="explainText"/>
            <div class="analytics-result">
                <h2>AI 얼굴 분석</h2>
                <h3>분석 결과</h3>
                <img src="#"/>
                <div>
                    니얼굴
                </div>
            </div>
        </div>
        <div class="recommand-makeup">
            화장법 추천
        </div>
    </div>
</template>

<script>
import UploadBox from '../components/UploadBox.vue'
export default {
    name:'Analytic',
    components: {
        UploadBox
    },
    data() {
        return {
            explainText:"사진올려"
        }
    }
}
</script>

<style>
.analytics {
    display:flex;
    flex-direction:row;
}
.recommand-makeup {
    border: 1px solid black;
}
</style>