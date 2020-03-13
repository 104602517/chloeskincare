<template>
	<div class="row justify-content-center">
		<div class="box1 col-12 ">
			<div class="mask"></div>
			<img src="../assets/photo-of-green-leafed-plant-beside-wall-1600130.jpg" class="landing" />
			<div class="logo" @click="toChoose">
				ChloeChloe
				<div class="logoLine">SEARCH FOR THE BEST SKINCARE</div>
				
			</div>

		</div>
		
		<div class="col-12 col-md-6 row justify-content-center box-4 order-3 order-md-2">
			<div class="box4-left col-md-7 col-7 mr-4">
				<img src="../assets/close-up-photo-of-swiss-cheese-leaf-912413.jpg" class="landing" />
			</div>
			<div class="smallBox col-md-2 col-2" @click="toChoose">let's  give &nbspit&nbsp;&nbsp; a &nbsp;try  !  </div>
		</div>

		<div class="box3 col-md-6 order-2 order-md-3">
			<p class="content1">
				<span style="font-size: 40px;">Intro.</span><br>保養品的目標，應該是呵護肌膚，讓肌膚永遠呈現他最美好自然的狀態，然而每個人的肌膚都具有不同的特性，對各種化學物質的適應度都不一樣，導致有些人因為使用了自己不適合的保養品，落入了愈保養皮膚愈糟的境況。<br>
				您可以透過點擊「化學物質介紹」來查詢，查詢欲購買之保養品內含的化學物質，我們希望能將保養品中多種常見的化學物質介紹給你，讓你在選購保養品時能夠避免太過刺激的成分！<br>
				您也可以根據膚質，選擇欲購買的保養品種類，我們將會根據其內含的化學物質刺激度，列出較適合您膚質的保養品列表──Chloe's skincare
			</p>
		</div>
		
		<footer class="footer col-11 order-4">
			<p id="foo">Design by Chloe and Allen</p>
		</footer>
		

	</div>
</template>

<script>
	export default {
		methods: {
			toChoose(){
				this.$router.push('/choose');
			}
		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.landing {
		width: 100%;
		height: 100%;
	}

	.box3 {
		background: lighten(rgb(215, 196, 187), 1%);
		height: 700px;
	}

	
	.smallBox{
		// margin-left: 75%;
		cursor: pointer;
		margin-top: 10%;
		height: 80%;
		background: #554236;
		font-size: 60px;
		color: white;
		padding: 0 7px 0 21px;
		text-align: center;
		writing-mode: vertical-lr;
		font-family: 'Shadows Into Light', cursive;
		animation: shine 2.5s linear infinite;
	}
	@keyframes shine{
		0%{
			box-shadow:0px 0px 0px 0px rgba(#B19693,0.5);
		}
		50%{
			box-shadow:5px 6px 11px 14px rgba(#B19693,0.5);
		}
		100%{
			box-shadow:0px 0px 0px 0px rgba(#B19693,0.6);
		}
	}
	.box1,
	.box2,
	.box4{
		height: 700px;
		display: inline-block;
	}
	.box4-left{
		margin-top: 10%;
		height: 80%;
		display: inline-block;
		-webkit-filter: opacity(.7);
	}

	.logo {
		cursor: pointer;
		font-family: 'Shadows Into Light', cursive;
		font-size: 140px;
		color: rgba(230, 240, 245, 0.9);
		z-index: 2;
		position: absolute;
		left: calc(50% - 254px);
		top: 200px;
		text-shadow: 1px 1px rgba(130, 130, 130, 0.3);
	}

	.logoLine {
		height: 5px;
		width: 100%;
		background: rgba(230, 240, 245, 0.9);
		position: absolute;
		top: 180px;
		left: calc(50% - 254px);
		font-size: 30px;
		text-align: center;
	}

	.content1 {
		line-height: 2;
		padding: 0 190px 70px 190px;
		margin-top: 150px;
		font-family: 'Noto Sans TC', sans-serif;
		color: black;
		text-shadow: 1px 1px rgba(230, 180, 180, 0.6);
	}
	
	footer{
		clip-path: polygon(48% 6%, 46% 6%, 45% 6%, 41% 6%, 37% 6%, 37% 6%, 33% 7%, 30% 7%, 25% 7%, 20% 7%, 12% 8%, 9% 12%, 10% 19%, 7% 22%, 11% 22%, 8% 28%, 7% 30%, 7% 36%, 9% 41%, 9% 44%, 9% 48%, 10% 51%, 10% 59%, 7% 63%, 8% 64%, 10% 67%, 10% 68%, 10% 74%, 10% 77%, 9% 81%, 9% 84%, 9% 90%, 11% 92%, 18% 95%, 20% 95%, 26% 95%, 33% 93%, 37% 93%, 48% 95%, 53% 95%, 59% 95%, 63% 94%, 68% 93%, 73% 92%, 76% 92%, 82% 95%, 85% 95%, 88% 95%, 93% 92%, 93% 88%, 94% 81%, 95% 73%, 92% 69%, 90% 60%, 94% 53%, 93% 47%, 94% 39%, 93% 27%, 90% 20%, 88% 17%, 85% 12%, 88% 9%, 85% 5%, 81% 5%, 73% 5%, 62% 5%);
		height: 150px;
		width:70%;
		background: #B1B479;
	}
	
	#foo{
		color: floralwhite;
		text-align: center;
		font-size: 30px;
		line-height: 150px;
		font-family: 'Shadows Into Light', cursive;
	}
	
	@media (max-width: 1395px){
		.content1{
			margin-top: 150px;
			padding: 0 140px 70px 140px;
		}
	}
	@media (max-width: 1283px){
		.content1{
			margin-top: 90px;
			padding: 0 140px 70px 140px;
		}
	}
	@media (max-width: 1230px){
		.content1{
			margin-top: 80px;
			padding: 0 100px 70px 100px;
		}
		.smallBox{
			padding: 0 7px 0 8px;
		}
	}
	@media (max-width: 1120px){
		.content1{
			margin-top: 60px;
			padding: 0 80px 70px 80px;
		}
	}
	@media (max-width: 1020px) {
		.logo {
			font-size: 120px;
			left: calc(50% - 218.5px);
			top: 250px;
		}

		.logoLine {
			left: calc(50% - 218.5px);
			top: 160px;
			height: 5px;
		}
		.content1{
			margin-top: 50px;
			padding: 0 60px 70px 60px;
		}
		.smallBox{
			padding: 0 4px 0 6px;
			font-size: 48px;
		}
	}
	
	@media (max-width: 970px){
		.content1 {
			margin-top: 50px;
			padding: 0px 40px 40px 40px;
		}
	}
	@media (max-width: 900px) {
		.logo {
			font-size: 100px;
			left: calc(50% - 182px);
			top: 160px;
			
		}

		.content1 {
			font-size: 15px;
			margin-top: 30px;
			padding: 0px 30px 40px 30px;
		}

		.logoLine {
			left: calc(50% - 182px);
			top: 130px;
			height: 4px;
			font-size: 26px;
		}
		.box1,
		.box4{
				height: 500px;
			}
		.box3{
				height: 420px;
		}

	}
	@media (max-width: 830px){
		.content1 {
			font-size: 14px;
			margin-top: 27px;
			padding: 0px 25px 40px 25px;
		}
		.smallBox{
			font-size: 40px;
		}
	}

	@media (max-width: 767px) {
		.logo {
			top: 170px;
			font-size: 140px;
			left: calc(50% - 254px);
		}

		.content1 {
			padding: 0px 90px 40px 90px;
			margin-top: 85px;
		}

		.logoLine {
			left: calc(50% - 254px);
			top: 180px;
			height: 4px;
			font-size: 30px;
		}
		.smallBox{
			font-size: 65px;
			padding: 0 7px 0 12px;
		}
	}

	@media (max-width: 620px) {
		.logo {
			font-size: 120px;
			left: calc(50% - 218.5px);
		}
		.logoLine{
			left: calc(50% - 218.5px);
			top: 150px;
			height: 4px;
		}
		.content1 {
			padding: 0px 60px 40px 60px;
			margin-top: 50px;
		}
	}
	@media (max-width: 565px){
		.content1 {
			padding: 0px 60px 40px 60px;
			margin-top: 45px;
		}
		.box-4{
			height: 640px;
		}
		.smallBox{
			font-size: 45px;
			padding: 0 7px 0 12px;
		}
	}

	@media (max-width: 485px) {
		.logo {
			font-size: 100px;
			left: calc(50% - 182px);
		}

		.content1 {
			padding: 0px 50px 40px 50px;
			margin-top: 20px;
			font-size: 15px;
		}
		
		.logoLine{
			left: calc(50% - 182px);
			top: 130px;
			height: 3px;
			font-size: 26px;
		}
		#foo{
			font-size: 26px;
		}
		.smallBox{
			font-size: 35px;
			padding: 0 7px 0 8px;
		}
	}
	
	@media (max-width: 431px) {
		.content1 {
			font-size: 13px;
			padding: 0px 50px 40px 50px;
			margin-top: 5px;
		}
		
	}
	
	@media (max-width: 410px) {
		.logo {
			font-size: 80px;
			left: calc(50% - 145px);
		}

		.content1 {
			font-size: 13px;
			padding: 0px 50px 40px 50px;
			margin-top: 5px;
		}
		
		.logoLine{
			left: calc(50% - 145px);
			top: 100px;
			height: 3px;
			font-size: 20px;
		}
		#foo{
			font-size: 24px;
		}
	}
	
	@media (max-width: 377px) {
		.content1 {
			font-size: 12px;
			padding: 0px 50px 40px 50px;
			margin-top: 0px;
		}
		
	}
</style>
