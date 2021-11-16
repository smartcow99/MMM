import axios from 'axios';

export default {
    async actionTemp({commit},payload) {

    },
    // 추천 태그 GET
    async getRecommandTags({commit},payload) {
        commit('setRecommandTags',['012','01234','0123456789']);
    },
    // 추천 채널 GET
    async getRecommandChannels({commit},payload) {
        commit('setRecommandChannels',[
            {
                'profile':'',
                'name':'채널1'
            },
            {
                'profile':'',
                'name':'채널2'
            }
        ]);
    },
    //login 요청
    async requestLogin({commit},payload) {
        //로그인 요청
        commit('SetIsLogin',true);
    },
    //logout 요청
    async requestLogout({commit},payload) {
        //로그아웃 요청
        commit('SetIsLogin',false);
    },
    //추가적인 shorts 요청
    async requestShortList({commit},payload) {
        //추가적인 shorts 요청
        commit('addShortList',['1','2','3']);
    },
    async requestProductList({commit},payload) {
        //추가적인 shorts 요청
        commit('addProductList',['1','2','3']);
    },
    async requestChannelList({commit},payload) {
        //추가적인 shorts 요청
        commit('addChannelList',['1','2','3']);
    }
}