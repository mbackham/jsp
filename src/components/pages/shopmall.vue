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
					<img v-lazy="item.image" width="100%" height='100%'>
				</van-swipe-item>
				
			</van-swipe>
		</div>
		<div class="type-bar">
			<div class="aaa"  v-for="(cate,index) in category " :key='index'>
				<img v-lazy='cate.image' width="50" height="50">
				<span>{{cate.mallCategoryName}}</span>
			</div>
		</div>
		<!-- adbanner -->
		<div class="">
			<img v-lazy="adbanner" width='100%' alt="">
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				msg:'asd',
				location:require('../../assets/images/loca.png'),
				banner:[],
                category:[],
                adbanner:''
			}
		},
		created(){
			axios({
				url:'https://www.easy-mock.com/mock/5c1afd665bedd73867442daf/jsp/index',
				method:'get',
			})
			.then(res=>{
				
				this.category = res.data.data.category
				this.adbanner = res.data.data.advertesPicture.PICTURE_ADDRESS
				this.banner = res.data.data.slides
				console.log(this.banner)
			}).catch(err=>{
				console.log(err)
			})
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
		max-height:10rem;
		overflow:hidden;
	}
	.type-bar{
		background:#fff;
		margin:0 .3rem .3rem .3rem;
		border-radius:.3rem;
		font-size:14px;
		display:flex;
		flex-direction:row;
		flex-wrop:nowrap;


	}
	.type-bar .aaa{
		padding:.4rem;
		font-size:12px;
		text-align:center;
	}
</style>