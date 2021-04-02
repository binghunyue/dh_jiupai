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
app.$mount()
