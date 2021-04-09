<template>
	<view>
		<view class="news_item" @click="navigatorClick(item.id)" v-for="item in list" :key="item.id">
			<image src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg"></image>
			<!-- <image :src="item.img_url"></image> -->
			<!-- 右侧标题 -->
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<!-- 过滤器全局之后直接用就行 -->
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}</text>
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
		// 过滤器拦截修改(改为全局)也可以用自己的
		filters:{
			formatDate(date){
				console.log('....',date)
				const newDate = new Date(date)
				const year = newDate.getFullYear()
				const moth = (newDate.getMonth()+1).toString().padStart(2,0)
				// .toString().padStart(2,0)将数值转换为字符串，如果满足两位就进行补0
				const day = newDate.getDate().toString().padStart(2,0)
				// return year+moth+day 数值求和
				return year+'-'+moth+'-'+day
			}
		},
		// 用list接收父传来的组件
		props:['list'],
		onLoad() {

		},
		methods: {
			// 需求：需要调用父组件的itemClick方法实现事件功能
			/* 
			 1.先在子组件中给 项 绑定点击事件navigatorClick
			 2.通过点击事件中点击，使其this.$emit('itemClick')进行响应，将itemClick传递到父组件中
			 3.父组件通过@itemClick="goDetail"绑定一个新的点击事件，实现事件的监听
			 4.这样就可以通过子组件使用父组件的事件，提高效率goDetail(){uni.navigateTo({url:'/pages/news-detail/news-detail'})}
			 
			 */
			navigatorClick(id){
				this.$emit("itemClick",id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item{
		display: flex;
		border-bottom: 1px solid $shop-color;
		padding: 10rpx 15rpx;
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right{
			margin-left: 15rpx;
			// 弹性布局
			display: flex;
			// 横向排列
			flex-direction: column;
			// 两个铺满
			justify-content: space-between;
			.tit{
				font-size:30rpx
				
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
