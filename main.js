import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
import store from '@/store';
import Config from '@/common/js/config.js';
import Util from '@/common/js/util.js'

let vuexStore = require("@/store/$u.mixin.js");

Vue.mixin(vuexStore);
Vue.prototype.$config = Config;
Vue.prototype.$util = Util;
Vue.config.productionTip = false;
Vue.use(uView);

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})

// http拦截器
import httpInterceptor from '@/common/js/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

app.$mount()
