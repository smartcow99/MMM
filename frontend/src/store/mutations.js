export default {
    temp(state,payload) {

    },
    // 추천태그를 받아 설정하는 함수
    setRecommandTags(state,payload) {
        state['recommandTags'] = payload;
    },
    // 추천채널을 받아 설정하는 함수
    setRecommandChannels(state,payload) {
        state['recommandChannels'] = payload;
    },
    // 로그인 됐다면 로그인된 상태로 변경
    setIsLogin(state,payload) {
        state['userInfo'].isLogined = payload;
    },
    addShortList(state,payload) {
        state['shortList'].push(...payload);
    },
    addProductList(state,payload) {
        state['productList'].push(...payload);
    },
    addChannelList(state,payload) {
        state['channelList'].push(...payload);
    },
    openShort(state,payload) {
        state['currentShort'].title = payload['title'];
        state['currentShort'].isOpened = true;
    }
}
