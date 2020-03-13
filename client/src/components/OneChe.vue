<template>
	<div class="col-8 col-sm-6 col-lg-3 col-md-4"  @click="show()" :id="d.eName">
		<transition name="flip" mode="out-in">
			<div class="item mt-5 " v-if="!isShow" key="item">{{d.eName}}─{{d.cName}}</div>
			<div class="intro mt-5" v-if="isShow" key="intro">
				{{d.des}}
				<PgBar :data="d"></PgBar>
			</div>
		</transition>
	</div>
</template>

<script>
	import PgBar from './ProgressBar.vue';
	export default{
		props:['d'],
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			show(){
				this.isShow = !this.isShow;
			}
		},
		components:{
			PgBar
		}
	}
</script>

<style scoped>
	.item{
		font-family: 'Noto Sans TC', sans-serif;
		width: 100%;
		cursor: pointer;
		line-height: 250px;
		display: inline-block;
		text-align: center;
		text-decoration: none;
		color: black;
		border-radius: 10px;
		height: 250px;
		background: rgba(240,240,240,0.9);
		box-shadow: 1px 1px 5px 5px rgba(30,30,30,0.2);
	}
	.intro{
		font-family: 'Noto Sans TC', sans-serif;
		padding: 50px 20px 20px 20px;
		font-size: 10px;
		border-radius: 10px;
		cursor: pointer;
		height: 250px;
		width: 100%;
		background: rgba(245,245,245,0.9);
		box-shadow: 1px 1px 5px 5px rgba(30,30,30,0.2);
		
	}
	
	.flip-enter{
		opacity: 0;
	}
	.flip-enter-active{
		animation: flip-in ease 0.4s;
		transition: opacity ease 0.4s; 
	}
	.flip-leave-active{
		opacity: 0;
		animation: flip-out ease 0.4s;
		transition: opacity ease 0.4s; 
	}
	@keyframes flip-in{
		from{
			transform: rotateY(90deg);
		}
		to{
			transform: rotateY(0deg);
		}
	}
	@keyframes flip-out{
		from{
			transform: rotateY(0deg);
		}
		to{
			transform: rotateY(90deg);
		}
	}
	@media (max-width: 767px) {
		.intro{
			font-size: 10px;
		}
	}
	@media (max-width: 576px) {
		.intro{
			font-size: 10px;
			padding-top: 60px ;
		}
	}
	@media (max-width: 480px) {
		.intro{
			font-size: 9px;
		}
	}
</style>
