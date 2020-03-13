<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mt-2 mr-3 ml-3">
	  <router-link class="navbar-brand" to="/">Chloe's Skin Care</router-link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav">
	      <li class="nav-item mr-5 ml-lg-5">
	        <router-link class="nav-link" to="/" active-class="active" exact>首頁 <span class="sr-only">(current)</span></router-link>
	      </li>
	      <li class="nav-item mr-5">
	        <router-link class="nav-link" to="/che" active-class="active" exact>化學物質介紹</router-link>
	      </li>
	      <li class="nav-item mr-5">
	        <router-link class="nav-link" to="/choose" active-class="active">選擇妳的保養品</router-link>
	      </li>

	    </ul>
		<ul class="navbar-nav ml-auto" v-if="!loginState">
			<li class="nav-item ">
			  <router-link class="nav-link" to="/login" active-class="active" exact>登入 <span class="sr-only">(current)</span></router-link>
			</li>
			<li class="nav-item">
			  <router-link class="nav-link" to="/regist" active-class="active" exact>註冊</router-link>
			</li>
		</ul>
		<ul class="navbar-nav ml-auto" v-if="loginState">
			<li class="nav-item ">
			  <span class="nav-link user">Hello! {{userInfo.name}} <span class="sr-only">(current)</span></span>
			</li>
			<li class="nav-item">
			  <router-link class="nav-link" to="/wish">願望列表<span class="sr-only">(current)</span></router-link>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="#" @click="singOut">登出</a>
			</li>
		</ul>
	  </div>
	</nav>
</template>

<script>
	import {mapGetters} from 'vuex'
	
	export default{
		computed:{
			...mapGetters([
				'userInfo',
				'loginState'
			])
		},
		methods:{
			singOut(){
				const currentRouter = this.$router.currentRoute.path;
				if(currentRouter=='/'){
					localStorage.removeItem('eleToken');
					this.$store.dispatch('logOut');	
					location.reload();
				}else{
					localStorage.removeItem('eleToken');
					this.$store.dispatch('logOut');
					this.$router.push('/');
				}	
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navbar{
		background: rgba(235,235,235,0.95)!important;
	}
	.active{
		border-radius: 20px;
		background: rgba(250,250,250,1);
	}
	@media (max-width: 320px) {
		.navbar-brand{
			font-size: 13px;
		}
	}
	.user{
		cursor: default;
		color: black!important;
		font-weight: 300;
		animation: pop 2s linear infinite;
	}
	@keyframes pop{
		0%{
			font-weight: 300;
		}
		60%{
			font-weight: 750;
		}
		100%{
			font-weight: 400;
		}
	}
</style>
