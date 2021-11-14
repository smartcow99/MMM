import axios from 'axios';

export default {
    async getMessage({commit}) {
        const response = await axios.get('https://httpbin.org/get');
        console.log(response)
        commit('changeMessage',response.data.url)
    }
};