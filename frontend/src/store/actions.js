import axios from "axios";
export default {
  // 추천 태그 GET
  async getRecommendTags({ commit }, payload) {
    const response = await axios.get("/users/recommend", {
      params: {
        type: "tag",
        requestNum: 0,
      },
    });
    if (response.data) {
      commit("setRecommendTagList", response.data);
    }
  },

  // 추천 채널 GET
  async getRecommendChannels({ commit }, payload) {
    const response = await axios.get("/users/recommend", {
      params: {
        type: "channel",
        requestNum: 0,
      },
    });
    if (response.data) {
      commit("setRecommendChannelList", response.data);
    }
  },

  // 추천 shorts
  async getRecommendShorts({ commit }, payload) {
    //필요 정보: 제목, 썸네일,shortId, channelId
    const response = await axios.get("/users/recommend", {
      params: {
        type: "short",
        requestNum: 0,
      },
    });
    if (response.data) {
      commit("setRecommendShortList", response.data);
    }
  },
  //login 요청
  async requestLogin({ commit }, payload) {
    //로그인 요청 후 성공 시
    //유저 정보 요청
    const loginResponse = await axios.post("/users/login", {
      id: payload.id,
      password: payload.password,
    });
    if (loginResponse.status === 200) {
      const userInfoResponse = await axios.get("/users/info"); //유저 정보 요청
      commit("setUserInfo", userInfoResponse.data);
      commit("setIsLogin", true);
      commit("setLoginPageOn", false);
    }
  },
  async requestUserInfo({commit},payload) {
    const userInfoResponse = await axios.get("/users/info"); //유저 정보 요청
    commit("setUserInfo", userInfoResponse.data);
    commit("setIsLogin", true);
  },
  //logout 요청
  async requestLogout({ commit }, payload) {
    //로그아웃 요청
    const response = await axios.get("/users/logout");
    function deleteCookie(name) {
        const date = new Date();
        document.cookie = `${name}='';expires=${date.toUTCString()};path=/`;
    }
    deleteCookie('login');
    if (response.status == 200) {
      commit("initUserInfo");
      commit("setIsLogin", false);
    }
  },
  async requestPurchaseList({ commit }, payload) {
    //구매내역 요청
    commit("initRequestNum");
    const response = await axios.get("/users/purchaseList", {
      params: {
        requestNum: 0,
      },
    });
    if (response.data) {
      commit("setPurchaseList", response.data);
    }
  },
    async requestSearch({ commit }, payload) {
        //검색 요청 ( payload: 검색 string )
        //검색 타입에 따라 다른 commit 실행(short,channel,product)
        if (!payload["content"]) {
            alert("내용이 비어있습니다.");
            return;
        }
        commit("initRequestNum");
        if (payload["type"] === "channel") {
            const response = await axios.get("/users/search", {
                params: {
                type: "channel",
                content: payload["content"],
                requestNum: 0,
                order: "rate",
                },
            });
            if (response.status == 200) {
                commit("setChannelList", response.data.searchResult);
            }
        } else if (payload["type"] === "product") {
            const response = await axios.get("/users/search", {
                params: {
                type: "product",
                content: payload["content"],
                requestNum: 0,
                order: "rate",
                },
            });
            if (response.status == 200) {
                commit("setProductList", response.data.searchResult);
            }
        } else {
            const response = await axios.get("/users/search", {
                params: {
                type: "short",
                content: payload["content"],
                requestNum: 0,
                order: "rate",
                },
            });
            if (response.status == 200) {
                commit("setShortList", response.data.searchResult);
            }
        }
    },
    async requestAnalysis({ state, commit }, payload) {
        try {
            //이미지 전송 - multer, axios + formData
            state["isAnalysisLoading"] = "loading";
            let formData = new FormData();

            const config = {
                header: { "content-type": "multipart/form-data" },
            };
            formData.append("img", payload);
            formData.append("requestNum",0);

            const response = await axios.post("/users/pytest", formData, config);
            if (response.status == 200) {
                commit("setAnalysisResult", response.data);
                state["isAnalysisLoading"] = "loaded";
            } else {
                alert("파일을 저장하는데 실패했습니다.");
            }
        }
        catch(err) {
            console.log(err);
        }
    },
  // async requestRelatedChannelInfo({ commit }, payload) {
  //     //parameter: 채널 아이디(session으로 저장하는게 나을지 좀 의문)
  //     //영상을 올린 채널정보 요청(short.vue에서 사용)
  //     const response = await axios.get("/users/short", {
  //         params: {
  //             vid: shortId
  //         },
  //     });
  //     if (response.status == 200) {
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
  async requestShortInfo({ commit }, shortId) {
    commit("initShortInfo");
    commit("initRequestNum");
    const response = await axios.get("/users/short", {
      params: {
        vid: shortId,
      },
    });
    if (response.status == 200) {
      commit("setShortInfo", response.data);
    }
  },
  async requestChannelInfo({ commit }, payload) {
    //hot: 핫쇼츠, *: 구독한 모든 채널의 short, ID: 특정 채널의 info
    //channelId에 해당하는 채널 정보 요청
    //지금은 내 채널인경우와 아닌경우로 나눠놨지만 추후 내 channel page에서 대조해서 사용할 것임
    commit("initChannelInfo");
    commit("initRequestNum");
    if (!payload) return;

    const response = await axios.get("/users/channel", {
      params: {
        chid: payload,
      },
    });
    if (response.status == 200) {
      commit("setChannelInfo", response.data);
    }
  },
  async requestProductInfo({ commit }, payload) {
    //상품정보요청
    commit("initProductInfo");
    commit("initRequestNum");
    const response = await axios.get("/users/productInfo", {
      params: {
        pid: payload,
      },
    });
    if (response.status == 200) {
      commit("setProductInfo", response.data);
    }
  },
  async moreChannelSearch({ state, commit }) {
    if (state["isScrollRequestOn"] === true) return;
    else commit("setIsScrollRequestOn", true);
    //request axios get
    const response = await axios.get("/users/search", {
      params: {
        type: "channel",
        requestNum: ++state["requestNum"],
      },
    });
    if (response.status == 200) {
      commit("pushChannelSearch", response.data);
    }
    commit("setIsScrollRequestOn", false);
  },
  async moreShortSearch({ state, commit }) {
    if (state["isScrollRequestOn"] === true) return;
    else commit("setIsScrollRequestOn", true);
    const response = await axios.get("/users/search", {
      params: {
        type: "short",
        requestNum: ++state["requestNum"],
      },
    });
    if (response.status == 200) {
      commit("pushShortSearch", response.data);
    }
    commit("setIsScrollRequestOn", false);
  },
  async moreProductSearch({ state, commit }) {
    if (state["isScrollRequestOn"] === true) return;
    else commit("setIsScrollRequestOn", true);
    const response = await axios.get("/users/search", {
      params: {
        type: "product",
        requestNum: ++state["requestNum"],
      },
    });
    if (response.status == 200) {
      commit("pushProductSearch", response.data);
    }
    commit("setIsScrollRequestOn", false);
  },
  async morePurchaseHistory({ state, commit }) {
    if (state["isScrollRequestOn"] === true) return;
    else commit("setIsScrollRequestOn", true);
    const response = await axios.get("/users/purchaseList", {
      params: {
        requestNum: ++state["requestNum"],
      },
    });
    if (response.status == 200) {
      commit("pushPurchaseHistory", response.data);
    }
    commit("setIsScrollRequestOn", false);
  },
  async moreShortRecommend({ state, commit }) {
    if (state["isScrollRequestOn"] === true) return;
    else commit("setIsScrollRequestOn", true);
    state["shortRecommendOnload"] = "loading";
    const response = await axios.get("/users/recommend", {
      params: {
        type: "short",
        requestNum: ++state["requestNum"],
      },
    });
    if (response.status == 200) {
      commit("pushShortRecommend", response.data);
    }
    commit("setIsScrollRequestOn", false);
  },
  //추후 추가
  async moreChannelShorts({ state, commit }, payload) {
    if (state["isScrollRequestOn"] === true) return;
    else commit("setIsScrollRequestOn", true);
    const response = await axios.get("/users/addRequest", {
      params: {
        chid: payload,
        type: "channel", //short channel, product
        requestNum: ++state["requestNum"],
      },
    });
    if (response.status == 200) {
      commit("pushChannelShort", response.data);
    }
    commit("setIsScrollRequestOn", false);
  },
  async moreComment({ state, commit }, payload) {
    if (state["isScrollRequestOn"] === true) return;
    else commit("setIsScrollRequestOn", true);
    const response = await axios.get("/users/addRequest", {
      params: {
        vid: payload,
        type: "short", //short channel, product
        requestNum: ++state["requestNum"],
      },
    });
    if (response.status == 200) {
      commit("pushComment", response.data);
    }
    commit("setIsScrollRequestOn", false);
  },
async moreReview({ state, commit }, { pid, desc }) {
    if (state["isScrollRequestOn"] === true) return;
    else commit("setIsScrollRequestOn", true);
    const response = await axios.get("/users/addRequest", {
      params: {
        pid: pid,
        type: "product", //short channel, product
        requestNum: ++state["requestNum"],
        isDesc: desc,
      },
    });
    if (response.status == 200) {
        commit("pushReview", response.data);
    }
    commit("setIsScrollRequestOn", false);
},
async requestHasPurchaseHistory({commit},payload) {
    const response = await axios.get("/users/isPurchase", {
        params: {
            pid:payload
        },
    });
    if (response.status == 200) {
        return response.data;
    }
},

  async requestReviewSort({ state, commit }, payload) {
    commit("initRequestNum");
    const response = await axios.get("/users/addRequest", {
      params: {
        pid: payload.pid,
        type: "product",
        requestNum: 0,
        isDesc: payload.type == "high-rate" ? true : false,
      },
    });
    if (response.status == 200) {
      commit("reloadReview", response.data);
    }
  },
  async requestSort({ commit }, payload) {
    const response = await axios.get("/users/search", {
      params: {
        type: "product",
        content: payload["content"],
        requestNum: 0,
        order: payload.type,
      },
    });
    if (response.status == 200) {
      commit("setProductList", response.data.searchResult);
    }
  },
};
