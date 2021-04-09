<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view 
				:class="active===index?'active':''" 
				v-for="(item,index) in cateData" 
				:key="index"
				@click="leftClick(index,item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		<!-- 右侧的数据 -->
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in leftData" :key="item.id">
				<!-- <image :src="item.title"></image> -->
				<!-- 接口图片已经失效，随便找的一个小米官网的在线图片，但是不能预览 -->
				<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg" @click="preViewClick(item.img_url)"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="leftData.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cateData:[],
				active:0,
				leftData:[]
			}
		},
		methods: {
			async getPicsCate(){
				const res = await this.$myRequest({
					url:'/api/getimgcategory'
				})
				console.log('获取的分类数据',res)
				this.cateData = res.data.message
				// 这是什么？？测试0是否有数据
				this.leftClick(0,this.cateData[0].id)
			},
			async leftClick(index,id){
				// console.log(index),测试索引点击事件
				this.active = index
				// 获取右侧资源
				const cate = await this.$myRequest({
					url:'/api/getimages/'+id
				})
				this.leftData = cate.data.message
			},
			// 预览图片
			preViewClick(current){
				const urls = this.leftData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					// 从当前页开始预览
					current:current,
					// 预览图片地址
					urls:urls
				})
			}
			
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		// 横向分行
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				text-align: center;
				font-size: 26rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background: $shop-color;
				color: #FFFFFF;
			}
		}
		.right{
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 420rpx;
					border-radius: 5px;
				}
				text{
					font-size: 28rpx;
					line-height: 50rpx;
				}
			}
			
		}
	}
</style>
