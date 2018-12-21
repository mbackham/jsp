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
		<div class="recommend-area">
			<div class="recommend-title">
				商品推荐
			</div>
			<div class="recommend-body">
				<swiper :options='swiperOption'>
					<swiper-slide v-for='(item,index) in recommongoods' :key="index">
						<div class="recommend-item">
							<img :src="item.image" width="80%" >
							<div>{{item.goodsName}}</div>
							<div>￥{{item.price}} (￥{{item.mallPrice}})</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<div class="floor">
			<div class="floor-normal">
				<div class="floor_one">
					<img :src="floor1_0.image" width="100%"/>
				</div>
				<div>
					<div class="floor_two">
						<img :src="floor1_1.image" width="100%"/>
					</div>
					<div >
						<img :src="floor1_2.image" width="100%">
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default{
		data(){
			return{
				msg:'asd',
				location:require('../../assets/images/loca.png'),
				banner:[],
                category:[],
                adbanner:'',
                recommongoods:[],
                swiperOption:{
                	loop:true,
                	slidesPerView:3
                },
                floor1:[],
                floor1_0:{},
                floor1_1:{},
                floor1_2:{}

			}
		},
		components:{
			swiper,swiperSlide
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
				this.recommongoods=res.data.data.recommend
				this.floor1=res.data.data.floor1
				this.floor1_0 = this.floor1[0]
                this.floor1_1 = this.floor1[1]
                this.floor1_2 = this.floor1[2]
				console.log(res.data.data)
			}).catch(err=>{
				console.log(err)
			})
		},
		components:{
				
			swiper,swiperSlide
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
	.recommend-area{
		background:#fff;
		margin-top:.3rem;

	}
	.recommend-title{
		border-bottom:1px solid #eee;
		font-size:14px;
		padding:.2rem;
		color:#e5017d;
	}
	.recommend-body{
		border-bottom:1px solid #eee;

	}
	.recommend-item{
		width:99%;
		border-right:1px solid #eee;
		font-size:12px;
		text-align:center;

	}
	.floor-normal{
		 display:flex;
		 flex-direction:row;
		 background:#fff;
		 border-bottom:1px solid #ddd;

	}
	.floor-normal div {
		width:10rem;
		box-sizing:border-box;
	}
	.floor_one{
		border-right:1px solid #ddd;

	}
	.floor_two{
		border-bottom:1px solid #ddd;
	}
</style>