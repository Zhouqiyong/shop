<template>
	<view class="news">
		<!-- 把newsData传到new-item中 -->
		<news-item :list="newsData" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import newsList from '../../components/news-item/new-item.vue'
	export default {
		data() {
			return {
				// 初始化拿到数据
				newsData:[]
			}
		},
		// 组件使用声明
		components:{"news-item":newsList},
		onLoad() {
			this.getNews()
		},
		methods: {
		async getNews(){
			const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				console.log('测试数据',res)
				this.newsData = res.data.message
				console.log('测试数据2',this.newsData)
			},
			
			// 点击查看新闻详情
			// 直接接收传过来的id
			goDetail(id){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		},
		
	}
</script>

<style lang="scss">
	.news{
		
	}
</style>
