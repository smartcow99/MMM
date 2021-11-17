export default {
    userInfo: {
        isLogined: false,
        nickname: 'temp채널',
        userId:'',
        profileImage: '#',
        channel: {},
    },
    tagList: [],
    shortList: [],
    productList: [],
    recommandTagList: [],
    recommandChannelList: [],
    channelList: [],
    purchaseList: [],
    searchType:'short',
    currentShort: {
        isOpened: false,
        title:'',
        shortId:'',
        channelInfo:{},
        relatedTags: [],
        relatedProducts: [],
        comments: []
    },
    currentProduct: {
        title:'',
        id:'',
        relatedTags: [],
        relatedProducts: [],
        comments: []
    },
    analysisResult: {
        img: '',
        content: '',
    }
}