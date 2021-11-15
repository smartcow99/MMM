export default {
    temp(state,payload) {

    },
    loginPageState(state,payload) {
        state['isLoginPageOn'] = !!payload;
    },
}