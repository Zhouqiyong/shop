<!-- 组件复用 -->
<template>
	<view>
		<view class="goods_list">
			<!-- 商品项 -->
			<view class="goods_item" v-for="item in hotGoodData" :key="item.id" @click="navGoodsClick(item.id)">
				<!-- <image :src="item.img_url"></image> -->
				<image src="https://ms.bdimg.com/dsp-image/4192136997.jpg"></image>
				<view class="price">
					<text>￥{{item.sell_price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
				<view class="name">
					{{item.zhaiyao}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navGoodsClick(id){
				this.$emit('goodsItemClick',id)
			}
		},
		props:['hotGoodData']
	}
</script>

<style lang="scss">
	.goods_list{
		padding: 0 15rpx;
		// 横向居中
		display: flex;
		// 换行
		flex-wrap: wrap;
		// 调整位置（两个一行）
		justify-content: space-between;
		.goods_item{
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			//盒子被撑大，内容挤小系列
			padding: 15rpx;
			box-sizing: border-box;
			
			image{
				width: 80%;
				height: 150px;
				// 图片居中
				display: block;
				margin: 0 auto;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 10rpx 0;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 8rpx;
					text-decoration: line-through;
				}
			}
			.name{
				font-size: 30rpx;
				line-height: 50rpx;
				padding: 10rpx 0 15rpx 0;//上开始顺时针
			}
		}
		
	}
	
</style>
