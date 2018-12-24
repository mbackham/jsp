<template>
	<div>
		<div class="floor">
			<div class="floor-title">{{floorTitle}}</div>
			<div class="floor-normal">
				<div class="floor_one">
					<img :src="floorData0.image" width="100%"/>
				</div>
				<div>
					<div class="floor_two">
						<img :src="floorData1.image" width="100%"/>
					</div>
					<div >
						<img :src="floorData2.image" width="100%">
					</div>
				</div>
			</div>
			<div class="floor_rule">
				<div v-for="(item,index) in floorData.slice(3)" :key='index' >
					<img :src="item.image" width="100%">
					
				</div>

			</div>
		</div>
	</div>
</template>
<script> 
export default{
	props:['floorData','floorTitle'],
	data(){
		return{
			floorData0:{},
			floorData1:{},
			floorData2:{}
		}
	},
	created(){
		

alert(1)
	},
	watch:{
		floorData:function(val){
			console.log(this.floorData)
			this.floorData0 = this.floorData[0]
			this.floorData1 = this.floorData[1]
			this.floorData2 = this.floorData[2]
		}
	}
}
</script>
<style> 
.floor-title{
	text-align:center;
	font-size:14px;
	height:1.8rem;
	line-height:1.8rem;
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
	.floor_rule{
		display:flex;
		flex-direction:row;
		flex-wrop:wrap;
		background:#fff;
	}
	.floor_rule div{
		box-sizing:border-box;
		width:10rem;
		border-bottom:1px solid #ddd;
	}
	.floor_rule div:nth-child(odd){
		border-right:1px solid #ddd;
	}
</style>