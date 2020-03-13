// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Result from './components/Result.vue';
import {store} from './store.js'

Vue.component(Result)
Vue.use(VueAxios, axios)
// Vue.use(VueRouter);
// 請求攔截
axios.interceptors.request.use((req)=>{
	if(localStorage.eleToken){
		req.headers.Authorization = localStorage.eleToken;
		return req;
	}else{
		return req;
	}
})
// 響應攔截
axios.interceptors.response.use(res=>{
	return res
	})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
	template: '<App/>'
})
