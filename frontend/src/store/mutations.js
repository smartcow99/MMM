export default {
    temp(state,payload) {

    },
    
    
    // 추천태그를 받아 설정하는 함수
    setTagsList(state,payload) {
        state['tagList'] = payload;
    },
    setChannelList(state,payload) {
        state['channelList'] = payload;
    },
    setProductList(state,payload) {
        state['productList'] = payload;
    },
    // 로그인 됐다면 로그인된 상태로 변경
    setIsLogin(state,payload) {
        state['userInfo'].isLogined = payload;
    },
    setShortList(state,payload) {
        state['shortList'] = payload;
    },
    setProductList(state,payload) {
        state['productList'] = payload;
    },
    setChannelList(state,payload) {
        state['channelList'] = payload;
    },
    openShort(state,payload) {
        state['currentShort'].title = payload['title'];
        state['currentShort'].shortId = payload['shortId'];
        state['currentShort'].channelId = payload['channelId'];
        state['currentShort'].isOpened = true;
    },
    setPurchaseList(state,payload) {
        state['purchaseList'] = payload;
    },
    setAnalysisResult(state,payload) {
        state['analysisResult'].img = payload.img;
        state['analysisResult'].content = payload.content;
    },
    initAnalysisResult(state,payload) {
        state['analysisResult'].img = '';
        state['analysisResult'].content = '';
    },
    setRelatedProducts(state,payload) {
        state['currentShort'].relatedProducts = payload;
    },
    setRelatedTags(state,payload) {
        state['currentShort'].relatedTags = payload;
    },
    setComments(state,payload) {
        state['currentShort'].comments = payload;
    },
    setChannelInfo(state,payload) {
        state['currentShort'].channelInfo = payload;
    }
}