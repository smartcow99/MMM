export default {
  temp(state, payload) {},

  // 로그인 됐다면 로그인된 상태로 변경
  setIsLogin(state, payload) {
    state["userInfo"].isLogined = payload;
  },
  // 추천태그를 받아 설정하는 함수
  setRecommandTagList(state, payload) {
    state["recommandTagList"] = payload;
  },
  setRecommandChannelList(state, payload) {
    state["recommandChannelList"] = payload;
  },
  setTagList(state, payload) {
    state["tagList"] = payload;
  },
  setChannelList(state, payload) {
    state["channelList"] = payload;
  },
  setProductList(state, payload) {
    state["productList"] = payload;
  },
  setShortList(state, payload) {
    state["shortList"] = payload;
  },
  openShort(state, payload) {
    state["currentShort"].title = payload["title"];
    state["currentShort"].shortId = payload["shortId"];
    state["currentShort"].channelId = payload["channelId"];
    state["currentShort"].isOpened = true;
  },
  setPurchaseList(state, payload) {
    state["purchaseList"] = payload;
  },
  setAnalysisResult(state, payload) {
    state["analysisResult"].img = payload.img;
    state["analysisResult"].content = payload.content;
  },
  initAnalysisResult(state, payload) {
    state["analysisResult"].img = "";
    state["analysisResult"].content = "";
  },
  setRelatedProducts(state, payload) {
    state["currentShort"].relatedProducts = payload;
  },
  setRelatedTags(state, payload) {
    state["currentShort"].relatedTags = payload;
  },
  setComments(state, payload) {
    state["currentShort"].comments = payload;
  },
  setChannelInfo(state, payload) {
    state["currentShort"].channelInfo = payload;
  },
  setSearchType(state, payload) {
    state["searchType"] = payload;
  },
  addTagList(state, payload) {
    //shorts 업로드 창에서 태그 추가시키면 태그리스트에 push해주는 함수
    state.tagList.push(payload);
  },
  resetTagList(state) {
    //shorts 업로드 버튼 클릭 하면 추가되었던 태그리스트 초기화해주는 함수
    state.tagList = [];
  },
  //   setShortsUpload(state, payload) {
  //     console.log(payload);
  //     // state["uploadedShorts"].userId = payload["userId"];
  //     state["uploadedShorts"].title = payload["title"];
  //     state["uploadedShorts"].explanation = payload["explanation"];
  //     // state["uploadedShorts"].tagList = payload["tagList"];
  //   },
};
