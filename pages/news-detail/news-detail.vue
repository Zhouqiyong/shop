<template>
	<view class="news-detail">
		<text class="title">{{newDetailData.title}}</text>
		<view class="info">
			<!-- 加载过滤器  | formatDate-->
			<text>发表时间：{{newDetailData.add_time | formatDate}}</text>
			<text>浏览：{{newDetailData.click}}</text>
		</view>
		<view class="content">
			<!-- {{newDetailData.content}}  含有标签不可以 -->
			<!-- 使用组件：富文本 -->
			<rich-text :nodes="newDetailData.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				newDetailData:{}
			}
		},
		onLoad(options) {
			// console.log(options)
			this.id = options.id
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail(){
			const res = await this.$myRequest({
					url:'/api/getnew/'+this.id
				})
				this.newDetailData = res.data.message[0]
			}
		}
	}
</script>

<style lang="scss">
	.news-detail{
		font-size: 28rpx;
		padding: 0 20rpx;
		.title{
			text-align: center;
			width: 750rpx;
			display: block;
			margin:20rpx 0 ;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
