<template>
	<view class="goods_list">
		<goods-list :hotGoodData="hotGoodData" @goodsItemClick="goGoodsDetail"></goods-list>
		<!--底部提示  -->
		<view class="isOver" v-if="flag">------我可是有底线的------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageIndex:1,
				hotGoodData:[],
				flag:false
			}
		},
		components:{"goods-list":goodsList},
		
		onLoad() {
			this.getGoodsList()
		},
		// 触底函数
		onReachBottom() {
			console.log('触底了')
			// 判断数据的量才可以显示
			if(this.hotGoodData.length<this.pageIndex*10) return this.flag = true
			this.pageIndex++
			this.getGoodsList()
			// 初始化变为真值（当触底函数触发的时候）
			// this.flag = true

		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log('下拉刷新了')
			this.pageIndex = 1
			this.hotGoodData = []
			this.flag = false
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		},
		// 方法
		methods: {
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex='+this.pageIndex
				})
				// console.log(res)可以输出
				// 1.获取单页数据
				// this.hotGoodData = res.data.message
				// 2.[...表示数组拼接]
				this.hotGoodData = [...this.hotGoodData,...res.data.message]
				callBack&&callBack()
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
	.goods_list{
		background: #eee;
		.isOver{
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 26rpx;
			color: #555555;
		}
	}
</style>
