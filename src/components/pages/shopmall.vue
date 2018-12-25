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
							<div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<floor :floorData='floor1' :floorTitle='floorName.floor1'/>
		<floor :floorData='floor2' :floorTitle='floorName.floor2'/>
		<floor :floorData='floor3' :floorTitle='floorName.floor3'/>
		<div class="hot-area">
		    <div class="hot-title">热卖商品</div>
		    <div class="hot-goods">
		     <van-List>
		     	<van-row gutter='20'>
		     		<van-col span='12' v-for='(item,index) in hotGoods' :key='index'>
		     			<goods-info :goodsImage='item.image' :goodsName='item.name' :goodsPrice='item.price'>
		     				
		     			</goods-info>
		     		</van-col>
		     	</van-row>
		     </van-List> <!--这里需要一个list组件-->
    </div>
</div>
 	</div>
</template>
<script>
	import axios from 'axios'
	import 'swiper/dist/css/swiper.css'
	import floor from '../floor/floor'
	import {toMoney} from '@/filter/moneyFilter.js'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import goodsInfo from '../goods/hotgoods'
	import url from '@/serviceAPI.config.js'
	export default{
		components:{
			swiper,swiperSlide,floor,goodsInfo
		},
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
                floor2:[],
                floor3:[],
              	floorName:{},
              	hotGoods:[]//热卖商品
			}
		},
		filters:{
			moneyFilter(money){
				return toMoney(money)
			}
		},
		
		
		
		created(){
			axios({
				url:url.getShopingMallInfo,
				method:'get',
			})
			.then(res=>{
				
				this.category = res.data.data.category
				this.adbanner = res.data.data.advertesPicture.PICTURE_ADDRESS
				this.banner = res.data.data.slides
				this.recommongoods=res.data.data.recommend
				this.floor1=res.data.data.floor1
				this.floor2=res.data.data.floor2
				this.floor3=res.data.data.floor3
				this.hotGoods=res.data.data.hotGoods
				this.floorName=res.data.data.floorName
				console.log(res.data.data)


				this.floorName = res.data.data.floorName
			}).catch(err=>{
				console.log(err)
			})
		},
	

		
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
	
.hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }

</style>