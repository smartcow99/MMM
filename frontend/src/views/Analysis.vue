<template>
    <div class="analysis-area page">
        <div class="analysis">
            <UploadBox 
                class="upload-box"
                @upload="uploadFile"
            ><p>{{explainText}}</p></UploadBox>
            <div class="analysis-result">
                <h2>AI 얼굴 분석</h2>
                <div class="analysis-result-content">
                    <h3>분석 결과</h3>
                    <img v-show="!!url" id="result-face" :src="url"/>
                    <div class="analysis-result-box">
                        {{analysisResult.content}}
                        <div class="loading-guide" v-if="isAnalysisLoading==='loading'">
                            <font-awesome-icon class="loading icon" icon='spinner' spin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Recommendation-area">
            <h2 id="Recommendation-title">추천 화장법</h2>
            <div class="Recommend-makeup">
                <Slider 
                    :count="3"
                    :elWidth="280"
                    :maxIndex="analysisResult['RecommendDressing'].length">
                >
                
                    <ShortSummary
                        class="item"
                        v-for="(value,index) in analysisResult['RecommendDressing']" 
                        :key="index" 
                        :shortInfo="value"/>
                </Slider>
            </div>
        </div>
    </div>
</template>

<script>
import UploadBox from '../components/UploadBox.vue'
import ShortSummary from '../components/ShortSummary.vue'
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
    name:'Analysis',
    components: {
        UploadBox,
        ShortSummary
    },
    data() {
        return {
            explainText:"얼굴 정면 사진을 올려주세요",
        }
    },
    created() {
        this.initAnalysisResult();
    },
    computed: {
        ...mapState([
            'analysisResult',
            'isAnalysisLoading'
        ]),
        url() {
            console.log(this.analysisResult)
            if(this.analysisResult['color'] && this.analysisResult['shape']) {
                return `/AI/face_${this.analysisResult['shape']}_${this.analysisResult['color']}.JPG`;
            }
            else {
                return '';
            }
        }
    },
    methods: {
        ...mapActions([
            'requestAnalysis',
        ]),
        ...mapMutations([
            'initAnalysisResult'
        ]),
        uploadFile(file) {
            this.requestAnalysis(file)
        }
    }
}
</script>

<style scoped>
h3{
    margin:0;
    margin-bottom:10px;
}
.upload-box {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:400px;
    height:500px;
    margin-right: 50px;
    margin-bottom: 30px;
}
.uploaded-img {
    width:400px;
    height:500px;
}
.analysis {
    display:flex;
    flex-direction:row;
    margin-top: 40px;
    margin-left: 30px;
}
.analysis-result{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    height:500px;
}
.analysis-result-content{
    display:flex;
    flex-grow:1;
    flex-direction: column;
    justify-content: flex-start;
}
.analysis-result-box{
    flex-grow:1;
    width:400px;
    border:1px solid var(--placeholder-color);
    border-radius: 4px;
    padding:10px;
    
}
.Recommendation-area {
    margin-left:30px;
}
#Recommendation-title{
    width:300px;
}
.Recommend-makeup {
    width:1000px;
    border: 1px solid black;
    display:flex;
    flex-direction:row;
}
.color-sample {
    width:50px;
    height:50px;
}
.loading-guide {
    width:100%;
    display:flex;
    flex-direction:row;
}
.loading-guide .loading.icon {
    margin:0 auto;
    margin-top:50px;
}
#result-face {
    width:100px;
    height:auto;
}
</style>