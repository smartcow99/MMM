export default {
    userInfo: {
        isLogined: true,
        nickname: 'temp채널',
        userId:'',
        profileImage: '#',
        channel: {},
    },
    tagList: [],
    shortList: [],
    productList: [],
    channelList: [],
    purchaseList: [],

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