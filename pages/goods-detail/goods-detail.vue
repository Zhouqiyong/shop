<template>
	<view class="good_detail">
		<!-- 轮播api的使用 -->
		<swiper indicator-dots autoplay="true">
			<swiper-item v-for="(item,index) in swipersData" :key="index">
				<!-- <image :src="httpImage.src"></image> -->
				<image src="../../static/2.jpg"></image>
			</swiper-item>
		</swiper>
		<!-- 第一个盒子 -->
		<view class="box1">
			<view class="price">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}</text>
			</view>
			<!-- 描述 -->
			<view class="goods_name">{{info.title}}</view>
		</view>
		<!-- 第二个盒子 -->
		<view class="box2">
			<view>货号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>
		<!-- 第三个盒子 -->
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<!-- 富文本编辑 -->
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<!-- 底部导航直接使用 -->
		<view class="goods_nav">
			<uni-goods-nav 
			:fill="true"  
			:options="options" 
			:buttonGroup="buttonGroup"  
			@click="onClick" 
			@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id:0,
				swipersData:[],
				info:{},
				content:{},
				options: [
							{
								icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
								text: '客服'
							}, 
							{
								icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
								text: '店铺',
								info: 2,
								infoBackgroundColor:'#ff0000',
								infoColor:"#fff"
							}, 
							{
								// 图标不显示
								icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
								text: '购物车',
								color: '#646566',
								info: 2
							},
						],
				        buttonGroup: [
								{
								  text: '加入购物车',
								  backgroundColor: '#ff0000',
								  color: '#fff'
								},
								{
								  text: '立即购买',
								  backgroundColor: '#ffa200',
								  color: '#fff'
								}
				        ]
				
			}
		},
		// 组件注册
		components: {uniGoodsNav},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
			// 页面一加载就要获取数据
			this.getInfoData()
			this.getInfoContent()
		},
		methods: {
		async getSwipers(){
			const res = await this.$myRequest({
					url:'/api/getthumimages/'+this.id
				})
				this.swipersData = res.data.message
				console.log(res)
			},
			// 获取详细信息
			async getInfoData(){
				const res = await this.$myRequest({
					url:'/api/goods/getinfo/'+this.id
				})
				console.log('..........',res)
				this.info = res.data.message[0]
			},
			// 获取详细介绍
			async getInfoContent(){
				const res = await this.$myRequest({
					url:'/api/goods/getdesc/'+this.id
				})
				this.content = res.data.message[0].content
			},
			// 底部导航的方法
			onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
			      },
			buttonClick (e) {
			        console.log(e)
			        this.options[2].info++
			      }
		},
		
}
</script>

<style lang="scss">
	.good_detail{
		swiper{
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.box1{
			padding: 10px;
			border-bottom: 10rpx solid #eee;
			.price{
				font-size: 36rpx;
				color: $shop-color;
				line-height: 80rpx;
				text:nth-child(2){
					font-size: 28rpx;
					text-decoration: line-through;
					color: #ccc;
					margin-left: 20rpx;
				}
			}
		}
			.goods_name{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		.box2{
			padding: 0 10px;
			font-size: 28rpx;
			line-height: 60rpx;
			border-bottom: 10rpx solid #eee;
		}
		.box3{
			padding: 0 10px;
			padding-bottom: 50rpx;
			.tit{
				font-size: 28rpx;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			.content{
				padding: 10rpx 5rpx;
				font-size: 26rpx;
				line-height: 50rpx;
			}
		}
		.goods_nav{
			position: fixed;
			bottom:0;
			width: 100%;
		}
	}
	
	
	
	
	
</style>
