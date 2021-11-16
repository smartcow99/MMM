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
        commit('setShortsList',[
            {title:'쇼츠1',profile:'#',shortId:1},
            {title:'쇼츠1',profile:'#',shortId:2},
            {title:'쇼츠1',profile:'',shortId:3}
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

    }
}