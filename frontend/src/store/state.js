export default {
    accessToken:'',//새로고침될때마다 로그인이 풀리므로, session을 통해 이를 해결해야함
    userInfo: {
        isLogined: false,
        name: '홍길동',
        userId:'',
        channelId:'',
        birth:'1998-11-02',
        profileImage: '#',
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
        relatedChannel:{},
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
    currentChannel: {
        title:'',
        profile:'',
        channelId:0,
        numOfSubscribers: 0,
        numOfShorts: 0,
        introduce:'',
        dressingTable:{},
        shortList:[]
    },
    analysisResult: {
        img: '',
        content: '',
    }
}