<template>
    <div id="analytic" class="page">
        <div class="analytics">
            <UploadBox 
                class="upload-box"
                
                @upload="uploadFile"
            >{{explainText}}</UploadBox>
            <div class="analytics-result">
                <h2>AI 얼굴 분석</h2>
                <h3>분석 결과</h3>
                <img :src="analysisResult.img"/>
                <div>
                    {{analysisResult.content}}
                </div>
            </div>
        </div>
        <h2>추천 화장법</h2>
        <div class="recommand-makeup">
            <span 
                v-for="(value,index) in analysisResult['recommandDressing']"
                :key="index"
            >
                <router-link :to="{path:'/search/', query:{'type':'short','content':value.title} }">
                    <img :src="value.thumnail"/>
                    <h3>{{value.title}}</h3>
                </router-link>
            </span>
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
    display:flex;
    flex-direction:row;
}
</style>