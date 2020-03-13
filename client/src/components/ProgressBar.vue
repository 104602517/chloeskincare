<template>
	<div class="pl-3">
		<span>敏感肌刺激度：</span>
		<span class="pg"><span :style="{width:data.aPoint/maxPoint*100+'%',background:data.aPoint<5?'green':'orange'}" class="insidepg">{{data.aPoint}}/{{maxPoint}}</span></span>
		<br>
		<span>中性肌刺激度：</span>
		<span class="pg"><span :style="{width:data.bPoint/maxPoint*100+'%',background:data.bPoint<5?'green':'orange'}" class="insidepg">{{data.bPoint}}/{{maxPoint}}</span></span>
		<br>
		<span>油性肌刺激度：</span>
		<span class="pg"><span :style="{width:data.cPoint/maxPoint*100+'%',background:data.cPoint<5?'green':'orange'}" class="insidepg">{{data.cPoint}}/{{maxPoint}}</span></span>
		<br>
	</div>
</template>

<script>
	export default{
		data(){
			 return {
				maxPoint:10 
			 }
		},
		props:['data']
	}
</script>

<style scoped>
	span{
		display: inline-block;
	}
	.pg{
		border-radius: 30px;
		background: darkgray;
		width: 50%;
		height: 13px;
		font-size: 10px;
		text-align: center;
		color: white;
		font-weight: 800;
	}
	.insidepg{
		float: left;
		height: 13px;
		border-radius: 20px;
	}
</style>
