import axios from "axios";

export default {
  async actionTemp({ commit }, payload) {},
  // 추천 태그 GET
  async getRecommandTags({ commit }, payload) {
    commit("setRecommandTagList", ["012", "01234", "0123456789"]);
  },

  // 추천 채널 GET
  async getRecommandChannels({ commit }, payload) {
    commit("setRecommandChannelList", [
      {
        title: "추천채널1",
        profile: "#",
        channelId: 1,
        numOfSubscribers: 105000,
        numOfShorts: 10,
        isSubscribed: false,
        introduce: "나는 채널1 이다",
      },
      {
        title: "추천채널2",
        profile: "#",
        channelId: 2,
        numOfSubscribers: 25000,
        numOfShorts: 24,
        isSubscribed: false,
        introduce: "나는 채널2 이다",
      },
      {
        title: "추천채널3",
        profile: "#",
        channelId: 3,
        numOfSubscribers: 35000,
        numOfShorts: 27,
        isSubscribed: false,
        introduce: "나는 채널3 이다",
      },
      {
        title: "추천채널4",
        profile: "",
        channelId: 4,
        numOfSubscribers: 45000,
        numOfShorts: 30,
        isSubscribed: false,
        introduce: "나는 채널4 이다",
      },
    ]);
  },
  // 추천 shorts
  async getRecommandShorts({ commit }, payload) {
    //필요 정보: 제목, 썸네일,shortId, channelId
    commit("setShortList", [
      {
        title: "쇼츠1",
        thumnail: "#",
        shortId: 1,
        channelId: "123",
        numOfSubscribers: 12345,
        numOfHearts: 54321,
        numOfViews: 12321,
      },
      {
        title: "쇼츠2",
        thumnail: "#",
        shortId: 2,
        channelId: "1234",
        numOfSubscribers: 12345,
        numOfHearts: 54321,
        numOfViews: 12321,
      },
      {
        title: "쇼츠3",
        thumnail: "#",
        shortId: 3,
        channelId: "13",
        numOfSubscribers: 12345,
        numOfHearts: 54321,
        numOfViews: 12321,
      },
    ]);
  },
  // 추천 상품 리스트
  async getRecommandProducts({ commit }, payload) {
    commit("setProductList", [
      {
        title: "상품1",
        thumnail: "#",
        productId: 1,
        rate: 3.4,
        price: 20000,
        //아직 더 추가해야함
      },
      {
        title: "상품2",
        thumnail: "#",
        productId: 2,
        rate: 3,
        price: 30000,
        //아직 더 추가해야함
      },
      {
        title: "상품3",
        thumnail: "#",
        productId: 3,
        rate: 4.6,
        price: 15000,
        //아직 더 추가해야함
      },
    ]);
  },
  //login 요청
  async requestLogin({ commit }, payload) {
    //로그인 요청
    commit("setIsLogin", true);
  },
  //logout 요청
  async requestLogout({ commit }, payload) {
    //로그아웃 요청
    commit("setIsLogin", false);
  },
  async requestShortList({ commit }, payload) {
    // shorts 요청
    commit("setShortList", [{ title: "1" }, { title: "2" }, { title: "3" }]);
  },
  async requestProductList({ commit }, payload) {
    //상품리스트 요청
    commit("setProductList", [
      {
        title: "상품1",
        thumnail: "#",
        productId: 1,
        rate: 3.4,
        price: 20000,
        //아직 더 추가해야함
      },
      {
        title: "상품2",
        thumnail: "#",
        productId: 2,
        rate: 3,
        price: 30000,
        //아직 더 추가해야함
      },
      {
        title: "상품3",
        thumnail: "#",
        productId: 3,
        rate: 4.6,
        price: 40000,
        //아직 더 추가해야함
      },
    ]);
  },
  async requestChannelList({ commit }, payload) {
    //채널리스트 요청
    commit("setChannelList", [
      {
        title: "채널1",
        profile: "#",
        channelId: 4,
        numOfSubscribers: 10000,
        numOfShorts: 20,
        isSubscribed: true,
        introduce: "나는 채널1 이다",
      },
      {
        title: "채널2",
        profile: "#",
        channelId: 5,
        numOfSubscribers: 20000,
        numOfShorts: 24,
        isSubscribed: false,
        introduce: "나는 채널2 이다",
      },
      {
        title: "채널3",
        profile: "#",
        channelId: 6,
        numOfSubscribers: 30000,
        numOfShorts: 27,
        isSubscribed: false,
        introduce: "나는 채널3 이다",
      },
      {
        title: "채널4",
        profile: "",
        channelId: 7,
        numOfSubscribers: 40000,
        numOfShorts: 30,
        isSubscribed: false,
        introduce: "나는 채널4 이다",
      },
    ]);
  },
  async requestPurchaseList({ commit }, payload) {
    //구매내역 요청
    commit("setPurchaseList", [
      { title: "구매1", thumnail: "#", date: "2021-11-17", price: 30000 },
      { title: "구매2", thumnail: "#", date: "2021-11-18", price: 40000 },
      { title: "구매3", thumnail: "#", date: "2021-11-19", price: 50000 },
    ]);
  },
  async requestSearch({ commit }, payload) {
    //검색 요청 ( payload: 검색 string )
    //검색 타입에 따라 다른 commit 실행(short,channel,product)
    if (payload["type"] === "channel") {
      commit("setChannelList", [
        {
          title: "검색채널1",
          profile: "#",
          channelId: 4,
          numOfSubscribers: 10000,
          numOfShorts: 20,
          isSubscribed: true,
          introduce: "나는 채널1 이다",
        },
      ]);
    } else if (payload["type"] === "product") {
      commit("setProductList", [
        {
          title: "검색상품1",
          thumnail: "#",
          productId: 1,
          rate: 3.4,
          price: 12000,
          //아직 더 추가해야함
        },
      ]);
    } else {
      commit("setShortList", [
        {
          title: "검색쇼츠1",
          thumnail: "#",
          shortId: 1,
          channelId: "123",
          numOfSubscribers: 12345,
          numOfHearts: 54321,
          numOfViews: 12321,
        },
      ]);
    }
  },
  async requestAnalysis({ commit }, payload) {
    //이미지 전송 - multer, axios + formData
    commit("setAnalysisResult", { img: "#", content: "니얼굴 잘생김" });
  },
  async requestRelatedProducts({ commit }, payload) {
    commit("setRelatedProducts", [
      { title: "관련상품1", img: "#", productId: "12" },
      { title: "관련상품2", img: "#", productId: "23" },
      { title: "관련상품3", img: "#", productId: "34" },
      { title: "관련상품4", img: "#", productId: "45" },
      { title: "관련상품5", img: "#", productId: "56" },
      { title: "관련상품6", img: "#", productId: "67" },
    ]);
  },
  async requestRelatedTags({ commit }, payload) {
    commit("setRelatedTags", [
      "관련상품1",
      "관련상품2",
      "관련상품3",
      "관련상품4",
      "관련상품5",
      "관련상품6",
    ]);
  },
  async requestComments({ commit }, payload) {
    //payload: shortId
    //해당 short의 댓글을 모두 읽어 반환
    commit("setComments", [
      { name: "토토로", profile: "#", content: "아브라카다브라" },
      { name: "토토로아빠", profile: "#", content: "아브라카다브라" },
      { name: "토토로아들", profile: "#", content: "아브라카다브라" },
      { name: "토토로엄마", profile: "#", content: "아브라카다브라" },
    ]);
  },
  async requestChannelInfo({ commit }, payload) {
    //parameter: 채널 아이디(session으로 저장하는게 나을지 좀 의문)
    //자세한 채널정보 요청(short.vue에서 사용)
    commit("setChannelInfo", {
      title: "채널10",
      profile: "",
      channelId: 7,
      numOfSubscribers: 210000,
      numOfShorts: 10,
      isSubscribed: false,
      introduce: "나는 채널10 이다",
    });
  },
  async requestRegistComment({ commit }, payload) {
    //안쓸예정
    //댓글 등록 요구 후, 댓글 목록 갱신 요청
    commit("setComments", [
      { name: "토토로", profile: "#", content: "아브라카다브라" },
      { name: "토토로아빠", profile: "#", content: "아브라카다브라" },
      { name: "토토로아들", profile: "#", content: "아브라카다브라" },
      { name: "토토로엄마", profile: "#", content: "아브라카다브라" },
      { name: "토토로엄마사칭범", profile: "#", content: "아브라카다브라" },
    ]);
  },
  async requestSubscribe({ commit }, payload) {
    //params 유저 아이디(또는 session으로 처리)
    //구독 하기
  },
  async requestUnsubscribe({ commit }, payload) {
    //params 유저 아이디(또는 session으로 처리)
    //구독 취소
  },

  async requestAnalysis({ commit }, payload) {
    //이미지 전송 - multer, axios + formData
    commit("setAnalysisResult", { img: "#", content: "니얼굴 잘생김" });
  },
  async requestRelatedProducts({ commit }, payload) {
    commit("setRelatedProducts", [
      { title: "관련상품1", img: "#", productId: "12" },
      { title: "관련상품2", img: "#", productId: "23" },
      { title: "관련상품3", img: "#", productId: "34" },
      { title: "관련상품4", img: "#", productId: "45" },
      { title: "관련상품5", img: "#", productId: "56" },
      { title: "관련상품6", img: "#", productId: "67" },
    ]);
  },
  async requestRelatedTags({ commit }, payload) {
    commit("setRelatedTags", [
      "관련상품1",
      "관련상품2",
      "관련상품3",
      "관련상품4",
      "관련상품5",
      "관련상품6",
    ]);
  },
  async requestComments({ commit }, payload) {
    //payload: shortId
    //해당 short의 댓글을 모두 읽어 반환
    commit("setComments", [
      { name: "토토로", profile: "#", content: "아브라카다브라" },
      { name: "토토로아빠", profile: "#", content: "아브라카다브라" },
      { name: "토토로아들", profile: "#", content: "아브라카다브라" },
      { name: "토토로엄마", profile: "#", content: "아브라카다브라" },
    ]);
  },
  async requestChannelInfo({ commit }, payload) {
    //parameter: 채널 아이디(session으로 저장하는게 나을지 좀 의문)
    //자세한 채널정보 요청(short.vue에서 사용)
    commit("setChannelInfo", {
      title: "채널10",
      profile: "",
      channelId: 7,
      numOfSubscribers: 210000,
      numOfShorts: 10,
      isSubscribed: false,
      introduce: "나는 채널10 이다",
    });
  },
  async requestRegistComment({ commit }, payload) {
    //댓글 등록 요구 후, 댓글 목록 갱신 요청
    commit("setComments", [
      { name: "토토로", profile: "#", content: "아브라카다브라" },
      { name: "토토로아빠", profile: "#", content: "아브라카다브라" },
      { name: "토토로아들", profile: "#", content: "아브라카다브라" },
      { name: "토토로엄마", profile: "#", content: "아브라카다브라" },
      { name: "토토로엄마사칭범", profile: "#", content: "아브라카다브라" },
    ]);
  },
  async requestSubscribe({ commit }, payload) {
    //params 유저 아이디(또는 session으로 처리)
    //구독 하기
  },
  async requestUnsubscribe({ commit }, payload) {
    //params 유저 아이디(또는 session으로 처리)
    //구독 취소
  },
  async addTagList({ commit }, payload) {
    // (payload:shorts 업로드 창에서 추가한 태그)
    commit("addTagList", [{ payload }]);
  },
  async resetTagList({ commit }) {
    commit("resetTagList");
  },
  //   async requestUpload({ commit }, payload) {
  //     console.log(payload);
  //     console.log(payload[2]);
  //     commit("setShorts", [
  //       //   { userId: payload[0] },
  //       { title: payload[1] },
  //       { explanation: payload[2] },
  //       //   { tag: payload[3] },
  //     ]);
  //   },
};
