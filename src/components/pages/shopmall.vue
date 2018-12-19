<template>
	<div>
		<div class="search-bar">
			<van-row>
				<van-col  span='3'><img class='local' :src="location" width='80%' alt=""></van-col>
				<van-col span='16'>
					<input type="text" class="search-input">

				</van-col>
				<van-col span='5'>
					<van-button size='mini'>查找</van-button>
				</van-col>
			</van-row>
		</div>
		<!-- 轮播图 -->
		<div class="swiper-area">
			<van-swipe :autoplay='1000'>
				<van-swipe-item v-for='(item,index) in banner' :key='index'>
					<img :src="item.imageUrl">
				</van-swipe-item>
				
			</van-swipe>
		</div>
	</div>
</template>
<script>
	let aaa = 'localhost:8080'  
	export default{
		data(){
			return{
				msg:'asd',
				location:require('../../assets/images/loca.png'),
				banner:[ 
				{imageUrl:'/src/assets/images/1.jpg'},
                {imageUrl:'/src/assets/images/2.jpg'},
                {imageUrl:'/src/assets/images/3.jpg'},]
			}
		}
	}
</script>
<style>
	.search-bar{
		height:2.2rem;
		background:#e5017d;
		line-height:2.2rem;
		overflow:hidden;
	}
	.search-input{
		width:100%;
		height:1.3rem;
		border-top:0px;
		border-left:0px;
		border-right:0px;
		border-bottom:1px solid #fff;
		background:#e5017d;
		color:#fff;
	}
	.local{
		padding-top:.2rem;
		padding-left:.3rem;
		font-size:15px;
	}
	.swiper-area{
		clear:both;
	}
</style>