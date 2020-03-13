import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		login:false,
		user:{}
	},
	getters:{
		loginState:state=>state.login,
		userInfo:state=>state.user
	},
	mutations:{
		setLoginToTrue:state=>state.login = true,
		setUserInfo:(state,info)=>{
			state.user.name = info.name;
			state.user.manager = info.manager;
			state.user.id = info.id;
		},
		logOut:state=>{
			state.login = false;
			state.user = {}
		}
	},
	actions:{
		setLoginToTrue:({commit})=>commit('setLoginToTrue'),
		setUserInfo:({commit},info)=>commit('setUserInfo',info),
		logOut:({commit})=>commit('logOut')
	}
})