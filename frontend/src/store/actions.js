import axios from "axios";

export default {
    // 추천 태그 GET
    async getRecommendTags({ commit }, payload) {
        const response = await axios.get(
            "http://34.64.76.43:3000/users/recommend",
            {
                params: {
                    type: "tag",
                    requestNum: 0,
                },
            }
        );
        if (response.data) {
            commit("setRecommendTagList", response.data);
        }
    },

    // 추천 채널 GET
    async getRecommendChannels({ commit }, payload) {
        const response = await axios.get(
            "http://34.64.76.43:3000/users/recommend",
            {
                params: {
                    type: "channel",
                    requestNum: 0,
                },
            }
        );
        if (response.data) {
            commit("setRecommendChannelList", response.data);
        }
    },

    // 추천 shorts
    async getRecommendShorts({ commit }, payload) {
        //필요 정보: 제목, 썸네일,shortId, channelId
        const response = await axios.get(
            "http://34.64.76.43:3000/users/recommend",
            {
                params: {
                    type: "short",
                    requestNum: 0,
                },
            }
        );
        if (response.data) {
            commit("setRecommendShortList", response.data);
        }
    },
    //login 요청
    async requestLogin({ commit }, payload) {
        //로그인 요청 후 성공 시
        //유저 정보 요청
        const loginResponse = await axios.post("http://34.64.76.43:3000/users/login", {
            id: payload.id,
            password: payload.password,
        });
        if (loginResponse.status === 200) {
            // const userInfoResponse = await axios.get("http://34.64.76.43:3000/users/info");//유저 정보 요청
            // commit("setUserInfo", userInfoResponse.data);
            commit("setIsLogin", true);
            commit("setLoginPageOn", false);
        }
    },

    //logout 요청
    async requestLogout({ commit }, payload) {
        //로그아웃 요청
        const response = await axios.get("http://34.64.76.43:3000/users/logout");
        if ((response.status = 200)) {
            commit("initUserInfo");
            commit("setIsLogin", false);
        }
    },
    async requestPurchaseList({ commit }, payload) {
        //구매내역 요청
        commit("initRequestNum");
        const response = await axios.get(
            "http://34.64.76.43:3000/users/purchaseList",
            {
                params: {
                requestNum: 0,
                },
            }
        );
        if (response.data) {
            commit("setPurchaseList", response.data);
        }
    },
    async requestSearch({ commit }, payload) {
        //검색 요청 ( payload: 검색 string )
        //검색 타입에 따라 다른 commit 실행(short,channel,product)
        console.log(payload)
        if(!payload['content']) {
            alert('내용이 비어있습니다.');
            return;
        }
        commit("initRequestNum");
        if (payload["type"] === "channel") {
            const response = await axios.get("http://34.64.76.43:3000/users/search", {
                params: {
                    type: "channel",
                    content: payload["content"],
                    requestNum: 0,
                },
            });
            if ((response.status = 200)) {
                commit("setChannelList", response.data.searchResult);
            }
        } else if (payload["type"] === "product") {
            const response = await axios.get("http://34.64.76.43:3000/users/search", {
                params: {
                    type: "product",
                    content: payload["content"],
                    requestNum: 0,
                },
            });
            if ((response.status = 200)) {
                commit("setProductList", response.data.searchResult);
            }
        } else {
            const response = await axios.get("http://34.64.76.43:3000/users/search", {
                params: {
                    type: "short",
                    content: payload["content"],
                    requestNum: 0,
                },
            });
            if ((response.status = 200)) {
                commit("setShortList", response.data.searchResult);
            }
        }
    },
    async requestAnalysis({ commit }, payload) {
        //이미지 전송 - multer, axios + formData
        let formData = new FormData();

        const config = {
            header: { 'content-type': 'multipart/form-data' },
        };
        formData.append('file', payload);

        const response = await axios.post('http://34.64.76.43:3000/users/pytest', formData, config);
        if (response.status = 200) {
            commit("setAnalysisResult", response.data);
        } else {
            alert('파일을 저장하는데 실패했습니다.');
        }
    },
    async requestShortInfo({ commit }, shortId) {
        commit("initRequestNum");
        const response = await axios.get("http://34.64.76.43:3000/users/short", {
            params: {
                vid: shortId
            },
        });
        if ((response.status = 200)) {
            commit("setShortInfo", response.data);
        }
        // commit("setShortInfo", {
        //     title: "클릭한 short",
        //     shortId: 999,
        //     info: "영상 정보 주저리주저리",
        //     numOfHearts: 230,
        //     numOfViews: 12000,
        //     relatedChannel: {
        //         title: "채널10",
        //         profile: "",
        //         channelId: 7,
        //         numOfSubscribers: 210000,
        //         numOfShorts: 10,
        //         isSubscribed: false,
        //         introduce: "나는 채널10 이다",
        //     },
        //     relatedTags: [
        //         "관련상품1",
        //         "관련상품2",
        //         "관련상품3",
        //         "관련상품4",
        //         "관련상품5",
        //         "관련상품6",
        //     ],
        //     relatedProducts: [
        //         { title: "관련상품1", img: "#", productId: "12" },
        //         { title: "관련상품2", img: "#", productId: "23" },
        //         { title: "관련상품3", img: "#", productId: "34" },
        //         { title: "관련상품4", img: "#", productId: "45" },
        //         { title: "관련상품5", img: "#", productId: "56" },
        //         { title: "관련상품6", img: "#", productId: "67" },
        //     ],
        //     comments: [
        //         { name: "토토로", profile: "#", content: "아브라카다브라" },
        //         { name: "토토로아빠", profile: "#", content: "아브라카다브라" },
        //         { name: "토토로아들", profile: "#", content: "아브라카다브라" },
        //         { name: "토토로엄마", profile: "#", content: "아브라카다브라" },
        //     ],
        // });
    },
    // async requestRelatedChannelInfo({ commit }, payload) {
    //     //parameter: 채널 아이디(session으로 저장하는게 나을지 좀 의문)
    //     //영상을 올린 채널정보 요청(short.vue에서 사용)
    //     const response = await axios.get("http://34.64.76.43:3000/users/short", {
    //         params: {
    //             vid: shortId
    //         },
    //     });
    //     if ((response.status = 200)) {
    //         commit("setShortInfo", response.data);
    //     }
    //     commit("setRelatedChannel", {
    //     title: "채널10",
    //     profile: "",
    //     channelId: 7,
    //     numOfSubscribers: 210000,
    //     numOfShorts: 10,
    //     isSubscribed: false,
    //     introduce: "나는 채널10 이다",
    //     });
    // },
    async requestChannelInfo({ commit }, payload) {
        //hot: 핫쇼츠, *: 구독한 모든 채널의 short, ID: 특정 채널의 info
        //channelId에 해당하는 채널 정보 요청
        //지금은 내 채널인경우와 아닌경우로 나눠놨지만 추후 내 channel page에서 대조해서 사용할 것임
        commit("initRequestNum");
        const response = await axios.get("http://34.64.76.43:3000/users/channel", {
            params: {
                chid: payload
            },
        });
        if ((response.status = 200)) {
            commit("setChannelInfo", response.data);
        }
    },
    async requestProductInfo({ commit }, payload) {
        //상품정보요청
        commit("initRequestNum");
        const response = await axios.get("http://34.64.76.43:3000/users/productInfo", {
            params: {
                pid: payload
            },
        });
        if ((response.status = 200)) {
            console.log(response.data)
            commit("setProductInfo", response.data);
        }
        // commit("setProductInfo", {
        // productId: "130",
        // productImages: ["#1", "#2", "#3", "#4", "#5"],
        // productInfo: {
        //     title: "상품명123",
        //     manufacturer: "아모레퍼시픽림",
        //     rate: 3.3,
        //     price: 9000,
        //     views: 34850,
        // },
        // relatedShorts: [
        //     {
        //     title: "관련 쇼츠1",
        //     thumnail: "#",
        //     shortId: 1111,
        //     channelId: 20,
        //     numOfSubscribers: 12345,
        //     numOfHearts: 54321,
        //     numOfViews: 12321,
        //     },
        //     {
        //     title: "관련 쇼츠2",
        //     thumnail: "#",
        //     shortId: 2224,
        //     channelId: 20,
        //     numOfSubscribers: 12345,
        //     numOfHearts: 54321,
        //     numOfViews: 12321,
        //     },
        // ],
        // productExplainHtml: `<div>hi i am product</div>`,
        // reviews: [
        //     {
        //     profile: "#",
        //     name: "abc",
        //     content: "그게정말사실인가요?",
        //     rate: 4.4,
        //     photo: "",
        //     },
        //     {
        //     profile: "#",
        //     name: "abc",
        //     content: "그게정말사실인가요?",
        //     rate: 2.4,
        //     photo: "#",
        //     },
        // ],
        // });
    },
    async moreChannelSearch({state,commit}){
        //request axios get
        const response = await axios.get("http://34.64.76.43:3000/users/search", {
            params: {
                type: 'channel',
                requestNum: ++state['requestNum']
            },
        });
        if ((response.status = 200)) {
            commit("pushChannelSearch", response.data);
        }
    },
    async moreShortSearch({state,commit}){
        const response = await axios.get("http://34.64.76.43:3000/users/search", {
            params: {
                type: 'short',
                requestNum: ++state['requestNum']
            },
        });
        if ((response.status = 200)) {
            commit("pushShortSearch", response.data);
        }
    },
    async moreProductSearch({state,commit}){
        const response = await axios.get("http://34.64.76.43:3000/users/search", {
            params: {
                type: 'product',
                requestNum: ++state['requestNum']
            },
        });
        if ((response.status = 200)) {
            commit("pushProductSearch", response.data);
        }
    },
    async morePurchaseHistory({state,commit}){
        const response = await axios.get("http://34.64.76.43:3000/users/purchaseList", {
            params: {
                requestNum: ++state['requestNum']
            },
        });
        if ((response.status = 200)) {
            commit("pushPurchaseHistory", response.data);
        }
    },
    async moreShortRecommend({state,commit}){
        const response = await axios.get("http://34.64.76.43:3000/users/recommend", {
            params: {
                type: 'short',
                requestNum: ++state['requestNum']
            },
        });
        if ((response.status = 200)) {
            console.log(response.data)
            commit("pushShortRecommend", response.data);
        }
    },
    //추후 추가
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
