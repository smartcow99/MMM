import axios from 'axios';

export default {
    async actionTemp({commit},payload) {

    },
    // 추천 태그 GET
    async getRecommandTags({commit},payload) {
        commit('setTagsList',['012','01234','0123456789']);
    },
    // 추천 채널 GET
    async getRecommandChannels({commit},payload) {
        commit('setChannelList',[
            {title:'채널1',profile:'#',channelId:1},
            {title:'채널2',profile:'#',channelId:2},
            {title:'채널3',profile:'',channelId:3}
        ]);
    },
    // 추천 shorts
    async getRecommandShorts({commit},payload) {
        //필요 정보: 제목, 썸네일,shortId, channelId
        commit('setShortList',[
            {title:'쇼츠1',thumnail:'#',shortId:1,channelId:'123'},
            {title:'쇼츠1',thumnail:'#',shortId:2,channelId:'234'},
            {title:'쇼츠1',thumnail:'',shortId:3,channelId:'345'}
        ]);
    },
    // 추천 상품 리스트
    async getRecommandsetProducts({commit},payload) {
        commit('setProductList',[
            {title:'상품1',profile:'#',productId:1},
            {title:'상품2',profile:'#',productId:2},
            {title:'상품3',profile:'',productId:3}
        ]);setProductList
    },
    //login 요청
    async requestLogin({commit},payload) {
        //로그인 요청
        commit('setIsLogin',true);
    },
    //logout 요청
    async requestLogout({commit},payload) {
        //로그아웃 요청
        commit('setIsLogin',false);
    },
    //추가적인 shorts 요청
    async requestShortList({commit},payload) {
        //추가적인 shorts 요청
        commit('setShortList',[{title:'1'},{title:'2'},{title:'3'}]);
    },
    async requestProductList({commit},payload) {
        //상품리스트 요청
        commit('setProductList',[{title:'상품1',productId:1},{title:'상품2',productId:2},{title:'상품3',productId:3}]);
    },
    async requestChannelList({commit},payload) {
        //채널리스트 요청
        commit('setChannelList',[{title:'채널1',channelId:1},{title:'채널2',channelId:2},{title:'채널3',channelId:3}]);
    },
    async requestPurchaseList({commit},payload) {
        //구매내역 요청
        commit('setPurchaseList',[{title:'구매1'},{title:'구매2'},{title:'구매3'}]);
    },
    async requestSearch({commit},payload) {
        //검색 요청 ( payload: 검색 string )
        //검색 타입에 따라 다른 commit 실행(short,channel,product)

    },
    async requestAnalysis({commit},payload) {
        //이미지 전송
        // console.log(payload)
        commit('setAnalysisResult',{'img':'#','content':'니얼굴 잘생김'})
    },
    async requestRelatedProducts({commit},payload) {
        commit('setRelatedProducts',[
            {title:'관련상품1',img:'#',productId:'12'},
            {title:'관련상품2',img:'#',productId:'23'},
            {title:'관련상품3',img:'#',productId:'34'},
            {title:'관련상품4',img:'#',productId:'45'},
            {title:'관련상품5',img:'#',productId:'56'},
            {title:'관련상품6',img:'#',productId:'67'},
        ])
    },
    async requestRelatedTags({commit},payload) {
        commit('setRelatedTags',[
            '관련상품1',
            '관련상품2',
            '관련상품3',
            '관련상품4',
            '관련상품5',
            '관련상품6',
        ])
    },
    async requestComments({commit},payload) {
        //payload: shortId
        //해당 short의 댓글을 모두 읽어 반환
        commit('setComments',[
            {name:'토토로',profile:'#',content:'아브라카다브라'},
            {name:'토토로아빠',profile:'#',content:'아브라카다브라'},
            {name:'토토로아들',profile:'#',content:'아브라카다브라'},
            {name:'토토로엄마',profile:'#',content:'아브라카다브라'}
        ])
    },
    async requestChannelInfo({commit},payload) {
        commit('setChannelInfo',{
            name:'',
            profile:'#',
            isSubscribed:false,//구독 여부(따로 때는게 나을까?)
            introduce:'나는 채널이다'
        });
    },
    async requestRegistComment({commit},payload) {
        //댓글 등록 요구 후, 댓글 목록 갱신 요청
        commit('setComments',[
            {name:'토토로',profile:'#',content:'아브라카다브라'},
            {name:'토토로아빠',profile:'#',content:'아브라카다브라'},
            {name:'토토로아들',profile:'#',content:'아브라카다브라'},
            {name:'토토로엄마',profile:'#',content:'아브라카다브라'},
            {name:'토토로엄마사칭범',profile:'#',content:'아브라카다브라'}
        ])
    }
}