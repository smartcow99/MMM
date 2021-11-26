export default {
  loginPageOn: false,
  uploadShortPageOn: false,
  shortPageOn: false,
  isDesc: true,
  searchOrder: "rate",

  isRecommendShortLoading: "loaded", // loading end loaded
  isScrollRequestOn: false,
  isPurchaseListLoading: "loaded",
  isAnalysisLoading: "loaded",
  isSearchLoading:'loaded',
  commentOnload: "loaded",

  requestNum: 0,
  userInfo: {
    isLogined: false,
    name: "",
    ID: "",
    channelId: "",
    birth: "",
    profileImage: "",
    subscribeChannelList: [],
  },
  shortList: [], // shorts 내역(검색 결과)
  productList: [], // product 내역(검색 결과)
  channelList: [], // 채널 내역(검색 결과)
  purchaseList: [], // 구매 내역
  RecommendTagList: [],
  RecommendChannelList: [],
  RecommendShortList: [],
  channelShortList: [],

  searchType: "short",
  currentShort: {
    isMyShort: false,
    url: "",
    title: "",
    shortId: 0,
    numOfHearts: 0,
    numOfViews: 0,
    relatedChannel: {},
    relatedTags: [],
    relatedProducts: [],
    comments: [],
    info: "",
  },
  currentProduct: {
    title: "",
    productId: 0,
    rate: 0,
    price: 0,
    views: 0,
    manufacturer: "",
    productImages: [],
    relatedShorts: [],
    productExplainHtml: "",
    reviews: [],
  },
  currentChannel: {
    isMyChannel: false,
    title: "",
    profile: "",
    channelId: 0,
    numOfSubscribers: 0,
    numOfShorts: 0,
    isSubscribed: false,
    introduce: "",
    haveItem: false,
    dressingTable: {},
    shortList: [],
  },
  analysisResult: {
    content: "",
    relatedShort: [],
    tone: "",
    face: "",
  },
};
