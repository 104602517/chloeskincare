<template>
	<div class="container">
		<transition name="slideInfo" mode="out-in">
			<div class="info" v-if="statusState">{{status}}</div>
		</transition>
		<div class="row justify-content-between head">
			<input type="button" class="btn btn-md btn-info ml-4" @click="isAdd = !isAdd" value="新增成分">
			<transition name="slide" mode="out-in">
				<AddChe v-if="isAdd"  @close="closeAdd"></AddChe>
			</transition>
			<div class="col-5 col-md-3">
				<input type="search" class="form-control" placeholder="搜尋成分" v-model="search">
				<ul class="search col-9 list-group" style="padding: 0; border: none; border-radius: 20px;" v-if="isSearch">
					<li v-for="l in list" class="list-group-item" style="width: 100%;"><a :href="'#'+l">{{l}}</a></li>
				</ul>
			</div>		
		</div>
			<div class="group row justify-content-center">
				<OneChe v-for="d in data" :d="d"></OneChe>
			</div>
			<div class="top" @click="rollTop">Top</div>
	</div>
</template>

<script>
	import OneChe from './OneChe.vue';
	import AddChe from './AddChe.vue';
	export default{
		data(){
			return{
				isAdd:false,
				data:[],
				search:'',
				list:[],
				isSearch:false,
				statusState:false,
				status:''
				}
		},
		components:{
			OneChe,
			AddChe
		},
		created(){
			console.log('before')
			this.axios.post('/che').then((response) => {
			  this.data = response.data
			}).catch(err=>console.log(err))
		},
		methods:{
			closeAdd(err){
				if(err=='err'){
					this.status = '請先進行登入'
					setTimeout(()=>{this.statusState = false},1000)
					this.statusState = true;
					setTimeout(()=>{this.$router.push('/login')},1100)
					this.isAdd = !this.isAdd;
				}else{
					this.status = '新增成功!'
					setTimeout(()=>{this.statusState = false},1000)
					this.statusState = true;
					this.isAdd = !this.isAdd;
				}
				
				this.axios.post('/che').then((response) => {
				  this.data = response.data;
				})
			},
			rollTop(){
				window.scrollTo(0,0);
			}
			// searching(){
			// 	for(let i=0;i<this.data.length;i++){
			// 		console.log(this.data[i].eName) 
			// 	}
			// },
		},
		watch:{
			search(){
				if(this.search == ""){
					this.isSearch = false;
				}else if(this.search.length>0){
					this.isSearch = true;	
				}
				this.list = [];
				let temp = [];
				for(let i=0;i<this.data.length;i++){	
					temp.push(this.data[i].eName)
					 this.list = temp.filter(word=>{
						if(word.match(this.search)){
							return true
						}else{
							return false
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
	.head{
		margin-top: 120px;
	}
	.btn{
		display: inline;
	}
	.container{
		background: lighten(rgb(215,196,187),1%);
	}
	.group{
		margin-top: 20px;
	}
	.form-control{
		display: inline;
		width: 100%;
	}
	.slide-enter{
		opacity: 0;
	}
	.slide-enter-active{
		animation: slide-in 1s ease;
		transition: opacity 1s ease;
	}
	.slide-leave-active{
		opacity: 0;
		animation: slide-out 1s ease;
		transition: opacity 1s ease;
	}
	.search{
		text-align: center;
		position: absolute;
		z-index: 4;
		border: 1px solid rgba(140,140,140,0.6);
		border-top: none;
		/* width: 206.594px; */
		background: white;
		list-style: none;
	}
	.top{
		cursor: pointer;
		color: darken(gray,20%);
		position: fixed;
		bottom: 50px;
		right: 30px;
		text-align: center;
		line-height: 80px;
		// border-radius: 50%;
		clip-path: polygon(50% 0, 100% 50%, 75% 50%, 75% 100%, 25% 100%, 25% 50%, 0 50%);
		// box-shadow: 1px 1px 1px 1px lighten(black,40%);
		background: rgba(255,255,255,0.5);
		width: 80px;
		height: 80px;
		&:hover{
			background: rgba(134,71,63,1);
			color: pink;
		}
	}
	@keyframes slide-in{
		from{
			transform: translateX(-100px);
		}
		to{
			transform: translateX(0px);
		}
	}
	@keyframes slide-out{
		from{
			transform: translateX(0px);
		}
		to{
			transform: translateX(-100px);
		}
		
	}
	.slideInfo-enter-active{
		opacity: 1;
		transition: opacity;
		left:15%;
		animation: slideInfo-in ease 0.7s;
	}
	.slideInfo-leave-active{
		left:15%;
		animation: slideInfo-out ease 0.7s;
	}
	@keyframes slideInfo-in{
		from{
			transform: translate(0px,-35px);
			opacity: 0;
		}
		to{
			transform: translate(0px,0px);
			opacity: 1;
		}
	}
	@keyframes slideInfo-out{
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
