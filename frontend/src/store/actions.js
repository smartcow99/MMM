import axios from "axios";

export default {
    // 추천 태그 GET
    async getRecommendTags({commit},payload) {
        // axios.get('')
        commit('setRecommendTagList',[
            '012',
            '01234',
            '0123456789'
        ]);
    },
    
    // 추천 채널 GET
    async getRecommendChannels({state,commit},payload) {
        const response = await axios.get('http://34.64.76.43:3000/users/recommend', {
            params:{
                type:'channel',
                requestNum:0,
            }
        });
        console.log(response.data)
        if(response.data) {
            commit('setRecommendChannelList',response.data);
        }
        // commit('setRecommendChannelList',[
        //     {
        //         title:'추천채널1',
        //         profile:'#',
        //         channelId:1,
        //         numOfSubscribers: 105000,
        //         numOfShorts: 10,
        //         isSubscribed:false,
        //         introduce:'나는 채널1 이다'
        //     },
        //     {
        //         title:'추천채널2',
        //         profile:'#',
        //         channelId:2,
        //         numOfSubscribers: 25000,
        //         numOfShorts: 24,
        //         isSubscribed:false,
        //         introduce:'나는 채널2 이다'
        //     },
        //     {
        //         title:'추천채널3',
        //         profile:'#',
        //         channelId:3,
        //         numOfSubscribers: 35000,
        //         numOfShorts: 27,
        //         isSubscribed:false,
        //         introduce:'나는 채널3 이다'
        //     },
        //     {
        //         title:'추천채널4',
        //         profile:'',
        //         channelId:4,
        //         numOfSubscribers: 45000,
        //         numOfShorts: 30,
        //         isSubscribed:false,
        //         introduce:'나는 채널4 이다'
        //     }    
        // ]);
    },

    // 추천 shorts
    async getRecommendShorts({commit},payload) {
        //필요 정보: 제목, 썸네일,shortId, channelId
        commit('setRecommendShortList',[
            {
                title:'쇼츠1',
                thumnail:'#',
                shortId:1,
                channelId:'123',
                numOfSubscribers:12345,
                numOfHearts:54321,
                numOfViews:12321
            },
            {
                title:'쇼츠2',
                thumnail:'#',
                shortId:2,
                channelId:'1234',
                numOfSubscribers:12345,
                numOfHearts:54321,
                numOfViews:12321
            },
            {
                title:'쇼츠3',
                thumnail:'#',
                shortId:3,
                channelId:'13',
                numOfSubscribers:12345,
                numOfHearts:54321,
                numOfViews:12321
            },
            {
                title:'내 쇼츠1',
                thumnail:'#',
                shortId:123,
                channelId:10,
                numOfSubscribers:12345,
                numOfHearts:54321,
                numOfViews:12321
            },
        ]);
    },
    // 추천 상품 리스트
    async getRecommendProducts({commit},payload) {
        commit('setProductList',[
            {
                title:'상품1',
                thumnail:'#',
                productId:1,
                rate:3.4,
                price:20000,
                view:12345
            },
            {
                title:'상품2',
                thumnail:'#',
                productId:2,
                rate:3,
                price:30000,
            },
            {
                title:'상품3',
                thumnail:'#',
                productId:3,
                rate:4.6,
                price:15000,
            },
        ]);
    },
    //login 요청
    async requestLogin({commit},payload) {
        //로그인 요청 후 성공 시
        //유저 정보 요청
        commit('setUserInfo',{
            isLogined: false,
            name: '홍길동',
            ID:'',
            birth:'1998-11-02',
            profileImage: '#',
            channelId:10
        })
        commit('setIsLogin',true);
        commit('setLoginPageOn',false);
    },
    //logout 요청
    async requestLogout({commit},payload) {
        //로그아웃 요청
        commit('initUserInfo');
        commit('setIsLogin',false);
    },
    // shorts 요청(검색에 대한 결과)
    async requestShortList({commit},payload) {
        // shorts 요청
        commit('setShortList',[{title:'1'},{title:'2'},{title:'3'}]);
    },
    async requestProductList({commit},payload) {
        //상품리스트 요청(검색에 대한 결과)
        commit('setProductList',[
            {
                title:'상품1',
                thumnail:'#',
                productId:1,
                rate:3.4,
                price:20000,
                //아직 더 추가해야함
            },
            {
                title:'상품2',
                thumnail:'#',
                productId:2,
                rate:3,
                price:30000,
                //아직 더 추가해야함
            },
            {
                title:'상품3',
                thumnail:'#',
                productId:3,
                rate:4.6,
                price:40000,
                //아직 더 추가해야함
            },
        ]);
    },
    async requestChannelList({commit},payload) {
        //채널리스트 요청(검색에 대한 결과)
        commit('setChannelList',[
            {
                title:'채널1',
                profile:'#',
                channelId:4,
                numOfSubscribers: 10000,
                numOfShorts: 20,
                isSubscribed:true,
                introduce:'나는 채널1 이다'
            },
            {
                title:'채널2',
                profile:'#',
                channelId:5,
                numOfSubscribers: 20000,
                numOfShorts: 24,
                isSubscribed:false,
                introduce:'나는 채널2 이다'
            },
            {
                title:'채널3',
                profile:'#',
                channelId:6,
                numOfSubscribers: 30000,
                numOfShorts: 27,
                isSubscribed:false,
                introduce:'나는 채널3 이다'
            },
            {
                title:'채널4',
                profile:'',
                channelId:7,
                numOfSubscribers: 40000,
                numOfShorts: 30,
                isSubscribed:false,
                introduce:'나는 채널4 이다'
            }
        ]);
    },
    async requestPurchaseList({commit},payload) {
        //구매내역 요청
        commit('setPurchaseList',[
            {title:'구매1',thumnail:'#',date:'2021-11-17',price:30000},
            {title:'구매2',thumnail:'#',date:'2021-11-18',price:40000},
            {title:'구매3',thumnail:'#',date:'2021-11-19',price:50000}
        ]);
    },
    async requestSearch({commit},payload) {
        //검색 요청 ( payload: 검색 string )
        //검색 타입에 따라 다른 commit 실행(short,channel,product)
        if(payload['type']==='channel') {
            commit('setChannelList',[
                {
                    title:'검색채널1',
                    profile:'#',
                    channelId:4,
                    numOfSubscribers: 10000,
                    numOfShorts: 20,
                    isSubscribed:true,
                    introduce:'나는 채널1 이다'
                }
            ]);
        }
        else if(payload['type']==='product') {
            commit('setProductList',[
                {
                    title:'검색상품1',
                    thumnail:'#',
                    productId:1,
                    rate:3.4,
                    price:12000
                }
            ]);
        }
        else {
            commit('setShortList',[{
                title:'검색쇼츠1',
                thumnail:'#',
                shortId:1,
                channelId:'123',
                numOfSubscribers:12345,
                numOfHearts:54321,
                numOfViews:12321
            }]);
        }
    },
    async requestAnalysis({commit},payload) {
        //이미지 전송 - multer, axios + formData
        commit('setAnalysisResult',{
            img:'#',
            content:'니얼굴 잘생김',
            RecommendDressing: [
                {
                    title:'화장법1',
                    thumnail: '#',
                },
                {
                    title:'화장법2',
                    thumnail: '#',
                },
                {
                    title:'화장법3',
                    thumnail: '#',
                }
            ]
        })
    },
    async requestRelatedProducts({commit},payload) {
        commit('setRelatedProducts',[
            {title:'관련상품1',img:'#',productId:'12'},
            {title:'관련상품2',img:'#',productId:'23'},
            {title:'관련상품3',img:'#',productId:'34'},
            {title:'관련상품4',img:'#',productId:'45'},
            {title:'관련상품5',img:'#',productId:'56'},
            {title:'관련상품6',img:'#',productId:'67'},
        ])
    },
    async requestRelatedTags({commit},payload) {
        commit('setRelatedTags',[
            '관련상품1',
            '관련상품2',
            '관련상품3',
            '관련상품4',
            '관련상품5',
            '관련상품6',
        ])
    },
    async requestComments({commit},payload) {
        //payload: shortId
        //해당 short의 댓글을 모두 읽어 반환
        commit('setComments',[
            {name:'토토로',profile:'#',content:'아브라카다브라'},
            {name:'토토로아빠',profile:'#',content:'아브라카다브라'},
            {name:'토토로아들',profile:'#',content:'아브라카다브라'},
            {name:'토토로엄마',profile:'#',content:'아브라카다브라'}
        ])
    },
    async requestShortInfo({commit},payload) {
        commit('setShortInfo',{
            isMyShort:true,
            url:'',
            title:'클릭한 short',
            shortId:999,
            info: '영상 정보 주저리주저리',
            numOfHearts:230,
            numOfViews:12000,
            relatedChannel:{
                title:'채널10',
                profile:'',
                channelId:7,
                numOfSubscribers: 210000,
                numOfShorts: 10,
                isSubscribed:false,
                introduce:'나는 채널10 이다'
            },
            relatedTags: [
                '관련상품1',
                '관련상품2',
                '관련상품3',
                '관련상품4',
                '관련상품5',
                '관련상품6',
            ],
            relatedProducts: [
                {title:'관련상품1',img:'#',productId:'12'},
                {title:'관련상품2',img:'#',productId:'23'},
                {title:'관련상품3',img:'#',productId:'34'},
                {title:'관련상품4',img:'#',productId:'45'},
                {title:'관련상품5',img:'#',productId:'56'},
                {title:'관련상품6',img:'#',productId:'67'},
            ],
            comments: [
                {name:'토토로',profile:'#',content:'아브라카다브라'},
                {name:'토토로아빠',profile:'#',content:'아브라카다브라'},
                {name:'토토로아들',profile:'#',content:'아브라카다브라'},
                {name:'토토로엄마',profile:'#',content:'아브라카다브라'}
            ]
        })
    },
    async requestRelatedChannelInfo({commit},payload) {
        //parameter: 채널 아이디(session으로 저장하는게 나을지 좀 의문)
        //영상을 올린 채널정보 요청(short.vue에서 사용)
        commit('setRelatedChannel',{
            title:'채널10',
            profile:'',
            channelId:7,
            numOfSubscribers: 210000,
            numOfShorts: 10,
            isSubscribed:false,
            introduce:'나는 채널10 이다'
        });
    },
    async requestRegistComment({commit},payload) {//안쓸예정
        //댓글 등록 요구 후, 댓글 목록 갱신 요청
        commit('setComments',[
            {name:'토토로',profile:'#',content:'아브라카다브라'},
            {name:'토토로아빠',profile:'#',content:'아브라카다브라'},
            {name:'토토로아들',profile:'#',content:'아브라카다브라'},
            {name:'토토로엄마',profile:'#',content:'아브라카다브라'},
            {name:'토토로엄마사칭범',profile:'#',content:'아브라카다브라'}
        ])
    },
    async requestChannelInfo({commit},payload) {
        //hot: 핫쇼츠, *: 구독한 모든 채널의 short, ID: 특정 채널의 info
        //channelId에 해당하는 채널 정보 요청
        //지금은 내 채널인경우와 아닌경우로 나눠놨지만 추후 내 channel page에서 대조해서 사용할 것임
        if(payload==10) {
            commit('setChannelInfo',{
                isMyChannel:true,
                title:'내 채널',
                profile:'#',
                channelId:10,
                numOfSubscribers: 130,
                numOfShorts: 3,
                isSubscribed:false,
                introduce:'내 채널 설명',
                dressingTable:{
                    '마스카라':[
                        {title:'마스카라1',img:'#',productId:'11'},
                        {title:'마스카라2',img:'#',productId:'12'},
                    ],
                    '립밤':[
                        {title:'립밤1',img:'#',productId:'13'},
                        {title:'립밤2',img:'#',productId:'14'},
                    ],
                    '파우더':[
                        {title:'파우더1',img:'#',productId:'15'},
                        {title:'파우더2',img:'#',productId:'16'},
                    ],
                    '크림':[
                        {title:'크림1',img:'#',productId:'17'},
                        {title:'크림2',img:'#',productId:'18'},
                        {title:'크림3',img:'#',productId:'19'},
                    ],
                    '향수':[
                        {title:'향수1',img:'#',productId:'20'},
                    ],
                },
                shortList:[
                    {
                        title:'내 쇼츠1',
                        thumnail:'#',
                        shortId:123,
                        channelId:10,
                        numOfSubscribers:12345,
                        numOfHearts:54321,
                        numOfViews:12321
                    },
                    {
                        title:'내 쇼츠2',
                        thumnail:'#',
                        shortId:124,
                        channelId:10,
                        numOfSubscribers:12345,
                        numOfHearts:54321,
                        numOfViews:12321
                    },
                    {
                        title:'내 쇼츠3',
                        thumnail:'#',
                        shortId:125,
                        channelId:10,
                        numOfSubscribers:12345,
                        numOfHearts:54321,
                        numOfViews:12321
                    },
                    {
                        title:'내 쇼츠1',
                        thumnail:'#',
                        shortId:123,
                        channelId:10,
                        numOfSubscribers:12345,
                        numOfHearts:54321,
                        numOfViews:12321
                    },
                    {
                        title:'내 쇼츠1',
                        thumnail:'#',
                        shortId:123,
                        channelId:10,
                        numOfSubscribers:12345,
                        numOfHearts:54321,
                        numOfViews:12321
                    },
                ]
            })
        }
        else {
            commit('setChannelInfo',{
                isMyChannel:false,
                title:`남의 채널${payload}`,
                profile:'#',
                channelId:20,
                numOfSubscribers: 130,
                numOfShorts: 3,
                introduce:'남의 채널 설명',
                isSubscribed:false,
                dressingTable:{
                    '마스카라':[
                        {title:'마스카라2',img:'#',productId:'11'},
                        {title:'마스카라3',img:'#',productId:'12'},
                    ],
                    '립밤':[
                        {title:'립밤1',img:'#',productId:'13'},
                        {title:'립밤2',img:'#',productId:'14'},
                    ],
                    '파우더':[
                        {title:'파우더1',img:'#',productId:'15'},
                        {title:'파우더3',img:'#',productId:'16'},
                    ],
                    '크림':[
                        {title:'크림1',img:'#',productId:'17'},
                        {title:'크림3',img:'#',productId:'18'},
                        {title:'크림4',img:'#',productId:'19'},
                    ],
                    '향수':[
                        {title:'향수1',img:'#',productId:'20'},
                    ],
                },
                shortList:[
                    {
                        title:'남의 쇼츠1',
                        thumnail:'#',
                        shortId:222,
                        channelId:20,
                        numOfSubscribers:12345,
                        numOfHearts:54321,
                        numOfViews:12321
                    },
                    {
                        title:'남의 쇼츠2',
                        thumnail:'#',
                        shortId:223,
                        channelId:20,
                        numOfSubscribers:12345,
                        numOfHearts:54321,
                        numOfViews:12321
                    },
                    {
                        title:'남의 쇼츠3',
                        thumnail:'#',
                        shortId:224,
                        channelId:20,
                        numOfSubscribers:12345,
                        numOfHearts:54321,
                        numOfViews:12321
                    },
                ]
            })
        }
    },
    async requestSubscribe({commit},payload) {
        //params 유저 아이디(또는 session으로 처리), channelId
        //구독 하기
    },
    async requestUnsubscribe({commit},payload) {
        //params 유저 아이디(또는 session으로 처리), channelId
        //구독 취소
    },
    async requestSubscribeChannels({commit},payload) {
        //구독한 채널 리스트
        commit('setSubscribeChannelList',[
            {
                title:'채널1',
                profile:'#',
                channelId:4,
                numOfSubscribers: 10000,
                numOfShorts: 20,
                isSubscribed:true,
                introduce:'나는 채널1 이다'
            },
            {
                title:'채널2',
                profile:'#',
                channelId:5,
                numOfSubscribers: 20000,
                numOfShorts: 24,
                isSubscribed:true,
                introduce:'나는 채널2 이다'
            },
        ])
    },
    async requestProductInfo({commit},payload) {
        //상품정보요청
        commit('setProductInfo',{
            productId:'130',
            productImages: ['#1','#2','#3','#4','#5'],
            productInfo: {
                title:'상품명123',
                manufacturer:'아모레퍼시픽림',
                rate:3.3,
                price:9000,
                views:34850
            },
            relatedShorts: [
                {
                    title:'관련 쇼츠1',
                    thumnail:'#',
                    shortId:1111,
                    channelId:20,
                    numOfSubscribers:12345,
                    numOfHearts:54321,
                    numOfViews:12321
                },
                {
                    title:'관련 쇼츠2',
                    thumnail:'#',
                    shortId:2224,
                    channelId:20,
                    numOfSubscribers:12345,
                    numOfHearts:54321,
                    numOfViews:12321
                },
            ],
            productExplainHtml:`<div>hi i am product</div>`,
            reviews: [
                {
                    profile:'#',
                    name:'abc',
                    content:'그게정말사실인가요?',
                    rate:4.4,
                    photo:''
                },
                {
                    profile:'#',
                    name:'abc',
                    content:'그게정말사실인가요?',
                    rate:2.4,
                    photo:'#'
                }
            ]
        })
    },
    async upShortsLikeCount({ commit }) {
        commit("upLikeCount");
    },
    async moreChannelSearch({state,commit}){
        //request axios get
        commit('pushChannelSearch',[])
    },
    async moreShortSearch({state,commit}){
        commit('pushShortSearch',[])
    },
    async moreProductSearch({state,commit}){
        commit('pushProductSearch',[])
    },
    async morePurchaseHistory({state,commit}){
        commit('pushPurchaseHistory',[])
    },
    async moreShortRecommand({state,commit}){
        commit('pushShortRecommand',[])
    },
    async moreChannelShorts({state,commit}){
        commit('pushChannelShort',[])
    },
    async moreComment({state,commit}){
        commit('pushComment',[])
    },
    async moreReview({state,commit}){
        commit('pushReview',[])
    },
};