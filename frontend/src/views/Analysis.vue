<template>
    <div id="analytic">
        <div class="analytics">
            <UploadBox 
                class="upload-box"
                :explain="explainText"
                @upload="uploadFile"
            />
            <div class="analytics-result">
                <h2>AI 얼굴 분석</h2>
                <h3>분석 결과</h3>
                <img :src="analysisResult.img"/>
                <div>
                    {{analysisResult.content}}
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
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
    name:'Analysis',
    components: {
        UploadBox
    },
    data() {
        return {
            explainText:"사진올려",
        }
    },
    mounted() {
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
.upload-box {
    width:300px;
    height:400px;
}
.uploaded-img {
    width:300px;
    height:400px;
}
.analytics {
    display:flex;
    flex-direction:row;
}
.recommand-makeup {
    border: 1px solid black;
}
</style>