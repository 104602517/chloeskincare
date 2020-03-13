<template>
	<div class="container">
		<transition name="slide" mode="out-in">
			<div class="info" v-if="statusState">{{status}}</div>
		</transition>
		<div class="row box">
			<form class="form-group">
				<span>暱稱：</span>
				<input type="text" class="form-control col-12" placeholder="五字元以內的暱稱" v-model="name">
				<span>帳號：</span>
				<input type="text" class="form-control col-12" placeholder="使用email註冊" v-model="email">
				<span>密碼：</span>
				<input type="password" class="form-control col-12" placeholder="五字元以上的密碼" v-model="password">
				<input type="button" class="btn btn-lg btn-info mt-3 col-12" value="註冊" @click="regist">
			</form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				name:'',
				email:'',
				password:'',
				statusState:false
			}
		},
		methods:{
			regist(){
				this.axios.post('/register',{params:{name:this.name,email:this.email,password:this.password}})
				.then(res=>{
					if(res.data.fail == 'Email exist'){
						setTimeout(()=>{this.statusState = false},1000)
						this.status = '此電子郵件已註冊過!'
						this.statusState = true;
					}
					else if(res.data.success == true){
						const vm = this;
						setTimeout(()=>{this.statusState = false},1000)
						setTimeout(()=>{
							vm.$router.push('/login');
						},600)
						this.status = '註冊成功!'
						this.statusState = true;
					}else if(res.data.success == false){
						setTimeout(()=>{this.statusState = false},1000)
						this.status = '註冊異常!請重新嘗試'
						this.statusState = true;
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		margin: 100px auto;
		.form-group{
			font-size: 30px;
			font-family: 'Noto Sans TC', sans-serif;
			width: 80%;
			margin: 0 auto;
		}
	}
	$color:#fefefe;
	.info{
		font-weight: 600;
		border-radius: 10px;
		width: 20%;
		height: 240px;
		line-height: 240px;
		text-align: center;
		background: rgba($color,0.9);
		border: 1px solid rgba(150,180,190,1);
		position: fixed;
		z-index: 99;
		left: 50%;
		transform: translateX(-50%);
	}
	.slide-enter-active{
		opacity: 1;
		transition: opacity;
		left:40%;
		animation: slide-in ease 0.7s;
	}
	.slide-leave-active{
		left:40%;
		animation: slide-out ease 0.7s;
	}
	@keyframes slide-in{
		from{
			transform: translate(0px,-35px);
			opacity: 0;
		}
		to{
			transform: translate(0px,0px);
			opacity: 1;
		}
	}
	@keyframes slide-out{
		from{
			opacity: 1;
			transform: translate(0px,0px);
		}
		to{
			opacity: 0;
			transform: translate(0px,-35px);
		}
	}
</style>
