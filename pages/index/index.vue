<template>
	<view class="index">
		<!-- 1.直接使用轮播视图插件：好用的一批 -->
		<swiper indicator-dots circular autoplay="true" interval='3000'>
			<swiper-item v-for="item in swipersData" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		
		<!-- 2.区域导航 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in iconNavs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
			
		</view>
		
		<!-- 3.推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<!-- 商品列表框 -->
			<goodsList :hotGoodData="hotGoodData" @goodsItemClick="goGoodsDetail"></goodsList>
		</view>
	</view>
</template>

<script>
	// 组件使用
	import hotGoodData from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipersData:[],
				hotGoodData:[],
				iconNavs:[
					{
						icon: 'iconfont icon-ziyuan',
						title: '三星超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					},
				]
			}
		},
		// 组件声明使用
		components:{
			// 组件名：原来的数
			"goodsList":hotGoodData
		},
		// 页面上生命周期函数，页面启动时，数据已经加载.
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图的数据
			// async 异步刷新
			async getSwipers(){
				//使用全局的方法
				const res = await this.$myRequest({
					url:'/api/getlunbo'
				})
				this.swipersData = res.data.message
			},
			// 获取热门商品数据
			async getHotGoods(){
				const good = await this.$myRequest({
					url:'/api/getgoods?pageindex=1'
				})
				this.hotGoodData = good.data.message
			},
			
			// 导航点击的处理函数
			navItemClick(url){
				uni.navigateTo({
					url
				})
				// console.log('跳转',url)
			},
			// 点击商品导航 导航到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.index{
		swiper{
			// 占满整个屏幕
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	
		/* 图标导航样式 */
		.nav{
			display: flex;
			.nav_item{
				width:25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #F8F8F8;
					font-size: 50rpx;
				}
				.icon-tupian{
					font-size: 45rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods{
			background-color: #eee;
			margin-top: 10px;
			// 溢出隐藏
			overflow: hidden;
			.tit{
				height: 50px;
				line-height: 50px;
				text-align: center;
				color: $shop-color;
				letter-spacing: 20px; 
				background-color: #ffffff;
				margin: 8rpx 0;
			}
		}
	
		
	}
</style>

<!-- // console.log('获取轮播图')
				/* uni.request({
					url:'http://localhost:8082/api/getlunbo',
					success:res=>{
						// console.log('获取轮播图',res)
						if(res.data.status!==0){
							uni.showToast({
								title:'获取数据失败请重新刷新'
							})
						}
						this.swipersData = res.data.message
					}
				}) */

-->