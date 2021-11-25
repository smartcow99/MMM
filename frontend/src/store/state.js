export default {
    loginPageOn: false,
    uploadShortPageOn: false,
    shortPageOn: false,

    isRecommendShortLoading: 'loaded', // loading end loaded

    requestNum:0,
    accessToken: "", //새로고침될때마다 로그인이 풀리므로, session을 통해 이를 해결해야함
    userInfo: {
        isLogined: false,
        name: "홍길동",
        ID: "",
        channelId: "",
        birth: "1998-11-02",
        profileImage: "#",
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
        url: '',
        title: "",
        shortId: "",
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
        productId: "",
        rate:0,
        price:0,
        views:0,
        manufacturer:'',
        productImages: [],
        relatedShorts: [],
        productExplainImg: "",
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
        dressingTable: {},
        shortList: [],
    },
    analysisResult: {
        content: "",
        RecommendDressing: [],
        color:''
    },
};
