<template>
	<div class="add row">
		<form>
			<div class="col-5 box">
				<p>英文名</p>
				<input type="text" class="filed form-control" v-model="eName">
			</div>
			<div class="col-5 box">
				<p>中文名</p>
				<input type="text" class="filed form-control" v-model="cName">
			</div>
			<div class="col-5 box">
				<p>敏感肌刺激度</p>
				<input type="text" class="filed form-control" v-model="aPoint">
			</div>
			<div class="col-5 box">
				<p>乾肌刺激度</p>
				<input type="text" class="filed form-control" v-model="bPoint">
			</div>
			<div class="col-5 box">
				<p>痘痘肌刺激度</p>
				<input type="text" class="filed form-control" v-model="cPoint">
			</div>
			<div class="col-9 box">
				<p>描述</p>
				<textarea class="des form-control" v-model="des"></textarea>
			</div>
			<button class="btn btn-sm btn-info" @click.prevent="submit">提交</button>
			
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				eName:'',
				cName:'',
				aPoint:'',
				bPoint:'',
				cPoint:'',
				dPoint:'',
				ePoint:'',
				des:''
			}
		},
		methods:{
			submit(){
				const newChe = {};
				newChe.eName = this.eName;
				newChe.cName = this.cName;
				newChe.aPoint = this.aPoint;
				newChe.bPoint = this.bPoint;
				newChe.cPoint = this.cPoint;
				newChe.des = this.des;
				this.axios.post('/che/new',newChe)
				.then(result=>{
					if(result){
						this.$emit('close');
					}
				})
				.catch(err=>{
					if(err.response.status == 401){
						localStorage.removeItem('eleToken')
						this.$emit('close','err');
					}
					});
				this.eName = '';
				this.cName = '';
				this.aPoint = '';
				this.bPoint = '';
				this.cPoint = '';
				this.des = '';
			}
		}
	}
</script>

<style scoped>
	.add{
		padding: 30px 40px 20px 40px;
		width: 85%;
		height: 350px;
		border: 0.5px solid white;
		position: absolute;
		top: 28%;
		left: 40px;
		z-index: 5;
		border-radius: 20px;
		background: rgba(245,245,245,0.9);
		box-shadow: 1px 1px 5px 5px rgba(30,30,30,0.2);
	}
	.filed{
		width: 100%;
	}
	.des{
		height: 80px;
		width: 100%;
	}
	p{
		margin: 0px 0px 0px 0px;
	}
	.btn{
		margin-bottom: 40px;
	}
	.box{
		display: inline-block;
	}
	form{
		margin-top: -10px;
	}
	@media (max-width:480px) {
		p{
			font-size: 10px;
		}
	}
</style>
