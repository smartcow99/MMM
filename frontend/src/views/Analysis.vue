<template>
    <div class="analysis-area">
        <div class="analysis">
            <UploadBox 
                class="upload-box"
                @upload="uploadFile"
            >{{explainText}}</UploadBox>
            <div class="analysis-result">
                <h2>AI 얼굴 분석</h2>
                <div class="analysis-result-content">
                    <h3>분석 결과</h3>
                    <img :src="analysisResult.img"/>
                    <div class="analysis-result-box">
                        {{analysisResult.content}}
                    </div>
                </div>
            </div>
        </div>
        <div class="recommendation-area">
            <h2 id="recommendation-title">추천 화장법</h2>
            <div class="recommend-makeup">
                <span 
                    v-for="(value,index) in analysisResult['recommendDressing']"
                    :key="index"
                >
                    <router-link :to="{path:'/search/', query:{'type':'short','content':value.title} }">
                        <img :src="value.thumnail"/>
                        <h3>{{value.title}}</h3>
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import UploadBox from '../components/UploadBox.vue'
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
    name:'Analysis',
    components: {
        UploadBox
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
            'analysisResult'
        ])
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
h2{
    margin-top:0;
}
h3{
    margin:0;
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
    justify-content: space-between;
    align-items: flex-start;
    height:500px;
}
.analysis-result-content{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
}
.analysis-result-box{
    width:400px;
    height:400px;
    border:1px solid var(--placeholder-color);
    border-radius: 4px;
    
}
#recommendation-title{
    width:300px;
}
.recommend-makeup {
    width:1000px;
    margin-left:30px;
    border: 1px solid black;
    display:flex;
    flex-direction:row;
}
</style>