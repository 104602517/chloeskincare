<template>
	<div class="card col-7 col-sm-5 col-md-3 mr-2 mb-5">
		<transition name="slide" mode="out-in">
			<div class="info" v-if="statusState">{{status}}</div>
		</transition>
		<transition name="flip" mode="out-in">
			<div v-if="isShow" key="1">
				<img :src="result.pic" class="card-img-top" alt="">
				<div class="card-body">
					<h5 class="card-title">{{result.name}}</h5>
					<p class="card-text" v-if="skin=='痘痘肌'">痘痘肌敏感指數：{{result.totalA}}</p>
					<p class="card-text" v-if="skin=='敏感肌'">敏感肌敏感指數：{{result.totalB}}</p>
					<p class="card-text" v-if="skin=='酒糟肌'">酒糟肌敏感指數：{{result.totalC}}</p>
					<!-- <p class="card-text" v-if="skin=='所有肌膚'">綜合敏感指數：{{result.totalPoint}}</p> -->
					<a href="" class="btn btn-info col-lg-7" @click.prevent="isShow=!isShow">詳細資訊 </a>
					<a href="#" class="btn btn-info plus col-lg-3 mt-2 mt-lg-0" @click.prevent="addToChart">+</a>
				</div>
			</div>
			<div v-if="!isShow" key="2">
				<div class="content">
					<ul>
						<li v-for="c in result.che">{{c.eName}}-{{c.cName}}</li>
					</ul>
				</div>
				<a href="#" class="btn btn-info" @click.prevent="isShow=!isShow" style="margin-bottom: 10px;font-size: 20px;">
					←
				</a>
			</div>
		</transition>

	</div>

</template>

<script>
	export default {
		props: ['result','skin'],
		data() {
			return {
				isShow: true,
				status:'XXXXXXXX',
				statusState:false
			}
		},
		methods:{
			addToChart(){
				if(this.$store.getters.loginState == false){
					this.status = '請先進行登入'
					setTimeout(()=>{this.statusState = false},1000)
					this.statusState = true;
				}else if(this.$store.getters.loginState == true){
					this.axios.post('/addChart',{params:{result:this.result,id:this.$store.getters.userInfo.id}})
					.then(res=>{
						if(res.data.msg == 'wish exist'){
							this.status = '此商品已在願望清單!'
							setTimeout(()=>{this.statusState = false},1000)
							this.statusState = true;
						}else{
							this.status = '新增至願望清單!'
							setTimeout(()=>{this.statusState = false},1000)
							this.statusState = true;
						}
						})		
				}
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color:#d1ecf1;
	.info{
		font-weight: 600;
		border-radius: 10px;
		width: 70%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		background: rgba($color,0.9);
		border: 1px solid rgba(150,180,190,1);
		position: fixed;
		top:20%;
		z-index: 99;
		left: 50%;
		transform: translateX(-50%);
	}
	.card {
		border-radius: 20px;
		margin-top: 20px;
		padding-top: 20px;
	}

	.plus {
		font-weight: 900;
	}

	.flip-enter {
		opacity: 0;
	}

	.flip-enter-active {
		animation: flip-in ease 0.4s;
		transition: opacity ease 0.4s;
	}

	.flip-leave-active {
		opacity: 0;
		animation: flip-out ease 0.4s;
		transition: opacity ease 0.4s;
	}

	@keyframes flip-in {
		from {
			transform: rotateY(90deg);
		}

		to {
			transform: rotateY(0deg);
		}
	}

	@keyframes flip-out {
		from {
			transform: rotateY(0deg);
		}

		to {
			transform: rotateY(90deg);
		}
	}
	
	.content{
		overflow: auto;
		margin: 4px auto;
		padding-bottom: 10px;
		height: 250px;
		width: 95%;
		border: 1px solid black;
	}
	.slide-enter-active{
		opacity: 1;
		transition: opacity;
		left:15%;
		animation: slide-in ease 0.7s;
	}
	.slide-leave-active{
		left:15%;
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
