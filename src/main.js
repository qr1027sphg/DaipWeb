import Vue from 'vue';
import App from './App.vue';
import router from './router';
import animated from 'animate.css/animate.css';
import axios from 'axios';
Vue.use(animated);
axios.defaults.baseURL = 'http://121.196.160.65:8082/';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
/* 下载量增加次数的接口：http://www.daip.club:8082/data/count/downloadcount
下载量仅仅查询的接口：http://www.daip.club:8082/data/count/getdown
网页访问量增加与查询接口：http://www.daip.club:8082/data/count/viewcount */

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
