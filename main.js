import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
import store from '@/store';
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

Vue.config.productionTip = false
Vue.use(uView);

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
