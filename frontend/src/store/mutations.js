export default {
  setLoginPageOn(state, payload) {
    state["loginPageOn"] = payload;
  },
  setUploadShortPageOn(state, payload) {
    state["uploadShortPageOn"] = payload;
  },
  setShortPageOn(state, payload) {
    state["shortPageOn"] = payload;
  },
  setUserInfo(state, payload) {
    state["userInfo"].subscribeChannelList = payload.subscribeChannelList;
    state["userInfo"].isLogined = payload.isLogined;
    state["userInfo"].name = payload.name;
    state["userInfo"].ID = payload.ID;
    state["userInfo"].channelId = payload.channelId;
    state["userInfo"].birth = payload.birth;
    state["userInfo"].profileImage = payload.profileImage;
  },
  initUserInfo(state, payload) {
    state["userInfo"].subscribeChannelList = [];
    state["userInfo"].isLogined = false;
    state["userInfo"].name = "";
    state["userInfo"].ID = 0;
    state["userInfo"].channelId = 0;
    state["userInfo"].birth = null;
    state["userInfo"].profileImage = "";
  },
  // 로그인 됐다면 로그인된 상태로 변경
  setIsLogin(state, payload) {
    state["userInfo"].isLogined = payload;
  },
  // 추천태그를 받아 설정하는 함수
  setRecommendTagList(state, payload) {
    state["RecommendTagList"] = payload;
  },
  setRecommendChannelList(state, payload) {
    state["RecommendChannelList"] = [...payload];
  },
  setRecommendShortList(state, payload) {
    state["RecommendShortList"] = [...payload];
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
  setPurchaseList(state, payload) {
    state["purchaseList"] = payload;
  },
  setAnalysisResult(state, payload) {
    const colorTable = {
      18:'#FEE1CB',
      19:'#FAD6C8',
      20:'#F7CBC0',
      21:'#F2C2B8',
      22:'#E9AEA8',
      23:'#E9AFA4',
      23:'#E5A4A0',
      'Fault':'white'
    }
    const shapeTable = {
      'Heart':'하트형',
      'Oblong':'긴얼굴형',
      'Oval':'계란형',
      'Round':'둥근형',
      'Square':'각진형',
      'Fault':'얼굴을 인식하는데 실패했습니다. 다른사진으로 시도해주세요.'
    }
    const contentGenerator = (payload) => {
      if(payload[0]==='Heart') {
        return `<p>당신의 얼굴은 '<b>${shapeTable[payload[0]]}</b>'</p> <p>당신의 피부톤은 ${payload[1]}호 (<div style="background-color:${colorTable[payload[1]]}; width:50px; height:50px;"></div>) 입니다.</p> <p>날카로운 이미지를 가지기 때문에 이마의 양옆과 턱 끝에 섀딩을 넣고 눈 밑과 턱 선에 하이라이트를 넣어줍니다. 블러셔를 강조하게 되면 인상이 강해 보일 수 있기 때문에 브라운 톤의 블러셔를 사용하면 됩니다.</p>`;
      }
      else if(payload[0]==='Oval') {
        return `<p>당신의 얼굴은 '<b>${shapeTable[payload[0]]}</b>'</p> <p>당신의 피부톤은 ${payload[1]}호 (<div style="background-color:${colorTable[payload[1]]}; width:50px; height:50px;"></div>) 입니다.</p> <p> 동양인에게서 많이 찾아볼 수 있습니다. 눈썹에 각진 눈썹(각진형, 상승형)를 주어 날카롭고 이지적인 분위기의 포인트를 줘야 합니다. 얼굴이 부드러워 보일 수가 있지만 평면적으로 보일 수도 있기 때문에 입체감을 살려주는 것이 중요하다.</p>`;
      }
      else if(payload[0]==='Oblong') {
        return `<p>당신의 얼굴은 '<b>${shapeTable[payload[0]]}</b>'</p> <p>당신의 피부톤은 ${payload[1]}호 (<div style="background-color:${colorTable[payload[1]]}; width:50px; height:50px;"></div>) 입니다.</p> <p> 얼굴이 짧아 보여야 하므로 블러셔는 가로로 넣어주고 이마 끝과 턱 끝에 섀딩 처리를 해주면 된다. 또한 코끝까지 하이라이트를 넣어주면 더 길어 보일 수 있으니 코 하이라이트는 주의해야 한다.</p>`;
      }
      else if(payload[0]==='Round') {
        return `<p>당신의 얼굴은 '<b>${shapeTable[payload[0]]}</b>'</p> <p>당신의 피부톤은 ${payload[1]}호 (<div style="background-color:${colorTable[payload[1]]}; width:50px; height:50px;"></div>) 입니다.</p> <p> 상승형 눈썹으로 동글해 보이는 인상을 풀어주고 메이크업에서 둥근 느낌이 없어지게 그려주면 된다.</p>`;
      }
      else if(payload[0]==='Square') {
        return `<p>당신의 얼굴은 '<b>${shapeTable[payload[0]]}</b>'</p> <p>당신의 피부톤은 ${payload[1]}호 (<div style="background-color:${colorTable[payload[1]]}; width:50px; height:50px;"></div>) 입니다.</p> <p> 둥근 눈썹을 통해 선한 이미지를 보여줄 수 있으면서, 일자형 눈썹을 통해 남자답고 강한 매력을 어필 할 수 있다. 매력이 있고 개성이 있어 보이지만 강한 인상을 줄 수 있기 때문에 부드러워 보이도록 이마 양옆과 각진 턱에 섀딩을 넣어주고 밸런스를 맞추어 줄 수 있다.</p>`;
      }
      else {
        return '얼굴을 인식하는데 실패했습니다. 다른사진으로 시도해주세요.'
      }
    }
    state["analysisResult"].content = contentGenerator(payload);
    state["analysisResult"].RecommendDressing = payload.RecommendDressing;
  },
  initAnalysisResult(state, payload) {
    state["analysisResult"].content = "";
    state["analysisResult"].RecommendDressing = [];
  },
  initShortInfo(state) {
    state["currentShort"].url = '';
    state["currentShort"].isMyShort = false;
    state["currentShort"].numOfHearts = 0;
    state["currentShort"].numOfViews = 0;
    state["currentShort"].title = '';
    state["currentShort"].shortId = 0;
    state["currentShort"].relatedChannel = {};
    state["currentShort"].relatedTags = [];
    state["currentShort"].relatedProducts = [];
    state["currentShort"].comments = [];
    state["currentShort"].info = '';
  },
  setShortInfo(state, payload) {
    state["currentShort"].url = payload.url;
    state["currentShort"].isMyShort = payload.isMyShort;
    state["currentShort"].numOfHearts = payload.numOfHearts;
    state["currentShort"].numOfViews = payload.numOfViews;
    state["currentShort"].title = payload.title;
    state["currentShort"].shortId = payload.shortId;
    state["currentShort"].relatedChannel = payload.relatedChannel;
    state["currentShort"].relatedTags = payload.relatedTags;
    state["currentShort"].relatedProducts = payload.relatedProducts;
    state["currentShort"].comments = payload.comments;
    state["currentShort"].info = payload.info;
  },
  setRelatedProducts(state, payload) {
    state["currentShort"].relatedProducts = payload;
  },
  setRelatedTags(state, payload) {
    state["currentShort"].relatedTags = payload;
  },
  setRelatedChannel(state, payload) {
    state["currentShort"].relatedChannel = payload;
  },
  setComments(state, payload) {
    state["currentShort"].comments = payload;
  },
  initChannelInfo(state) {
    state["currentChannel"].isMyChannel = false;
    state["currentChannel"].title = '';
    state["currentChannel"].isSubscribed = false;
    state["currentChannel"].profile = '';
    state["currentChannel"].channelId = 0;
    state["currentChannel"].numOfSubscribers = 0;
    state["currentChannel"].numOfShorts = 0;
    state["currentChannel"].introduce = '';
    state["currentChannel"].dressingTable = {};
    state["currentChannel"].shortList = [];
  },
  setChannelInfo(state, payload) {
    state["currentChannel"].isMyChannel = payload.isMyChannel === 'true'? true:false;;
    state["currentChannel"].title = payload.title;
    state["currentChannel"].isSubscribed = payload.isSubscribed === 'true'? true:false;
    state["currentChannel"].profile = payload.profile;
    state["currentChannel"].channelId = payload.channelId;
    state["currentChannel"].numOfSubscribers = payload.numOfSubscribers;
    state["currentChannel"].numOfShorts = payload.numOfShorts;
    state["currentChannel"].introduce = payload.introduce;
    payload.dressingTable.forEach(el=>{
      if(!!state["currentChannel"].dressingTable[el.category]) {
        state["currentChannel"].dressingTable[el.category].push(el);
      }
      else {
        state["currentChannel"].dressingTable[el.category] = [];
        state["currentChannel"].dressingTable[el.category].push(el);
      }
    })
    state["currentChannel"].shortList = payload.shortList;
  },
  initProductInfo(state) {
    state["currentProduct"].title = '';
    state["currentProduct"].productId = 0;
    state["currentProduct"].rate = 0;
    state["currentProduct"].price = 0;
    state["currentProduct"].views = 0;
    state["currentProduct"].manufacturer = '';
    state["currentProduct"].productImages = [];
    state["currentProduct"].relatedShorts = [];
    state["currentProduct"].productExplainImg = '';
    state["currentProduct"].reviews = [];
  },
  setProductInfo(state, payload) {
    state["currentProduct"].title = payload.title;
    state["currentProduct"].productId = payload.productId;
    state["currentProduct"].rate = payload.rate;
    state["currentProduct"].price = payload.price;
    state["currentProduct"].views = payload.views;
    state["currentProduct"].manufacturer = payload.manufacturer;
    state["currentProduct"].productImages = payload.productImages;
    state["currentProduct"].relatedShorts = payload.relatedShorts;
    state["currentProduct"].productExplainImg = payload.productExplainImg;
    state["currentProduct"].reviews = payload.reviews;
  },
  setDressingTable(state, payload) {
    state["currentChannel"].dressingTable = payload;
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
  upLikeCount(state) {
    state["currentShort"].like++;
  },
  sortProductList(state, { type }) {
    //payload: rate, view,  high-price, low-price
    const sortByRate = (a, b) => {
      if (a.rate < b.rate) return 1;
      else if (a.rate < b.rate) return 0;
      else return -1;
    };
    const sortByView = (a, b) => {
      if (a.view < b.view) return 1;
      else if (a.view < b.view) return 0;
      else return -1;
    };
    const sortByHighPrice = (a, b) => {
      if (a.price < b.price) return 1;
      else if (a.price < b.price) return 0;
      else return -1;
    };
    const sortByLowPrice = (a, b) => {
      if (a.price < b.price) return -1;
      else if (a.price < b.price) return 0;
      else return 1;
    };
    switch (type) {
      case "rate":
        state["productList"].sort(sortByRate);
        break;
      case "view":
        state["productList"].sort(sortByView);
        break;
      case "high-price":
        state["productList"].sort(sortByHighPrice);
        break;
      case "low-price":
        state["productList"].sort(sortByLowPrice);
        break;
    }
  },
  sortReviewList(state, { type }) {
    const sortByHighRate = (a, b) => {
      if (a.rate < b.rate) return 1;
      else if (a.rate < b.rate) return 0;
      else return -1;
    };
    const sortByLowRate = (a, b) => {
      if (a.rate < b.rate) return -1;
      else if (a.rate < b.rate) return 0;
      else return 1;
    };
    switch (type) {
      case "high-rate":
        state["currentProduct"].reviews.sort(sortByHighRate);
        break;
      case "low-rate":
        state["currentProduct"].reviews.sort(sortByLowRate);
        break;
    }
  },
  initRequestNum(state) {
    state['requestNum'] = 0;
  },
  pushChannelSearch(state,payload) {
    state['channelList'] = [...state['channelList'],...payload]
  },
  pushShortSearch(state,payload) {
    state['shortList'] = [...state['shortList'],...payload]
  },
  pushProductSearch(state,payload) {
    state['productList'] = [...state['productList'],...payload]
  },
  pushPurchaseHistory(state,payload) {
    state['purchaseList'] = [...state['purchaseList'],...payload];
    if(payload.length < 6) {
      state['isPurchaseListLoading'] = 'end';
    }
    else {
      state['isPurchaseListLoading'] = 'loaded';
    }
  },
  pushShortRecommend(state,payload) {
    state['RecommendShortList'] = [...state['RecommendShortList'],...payload];
    if(payload.length < 6) {
      state['isRecommendShortLoading'] = 'end';
    }
    else {
      state['isRecommendShortLoading'] = 'loaded';
    }

  },
  pushChannelShort(state,payload) {
    state['currentChannel'].shortList = [...state['currentChannel'].shortList, ...payload];
  },
  pushComment(state,payload) {
    state['currentShort'].comments = [...state['currentShort'].comments, ...payload];
    if(payload.length < 6) {
      state["commentOnload"] = 'end';
    }
    else {
      state["commentOnload"] = 'loaded';
    }
  },
  pushReview(state,payload) {
    state['currentProduct'].reviews = [...state['currentProduct'].reviews, ...payload];
  },
  setIsScrollRequestOn(state,payload) {
    state['isScrollRequestOn'] = payload;
  }
};





