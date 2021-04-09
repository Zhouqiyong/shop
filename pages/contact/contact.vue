<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<!-- 地址 -->
		<view class="info">
			<view @click="callPhone">联系电话：17837034022（点击拨打）</view>
			<view>所在地址：河南省驻马店市驿城区黄淮学院北区七号楼2楼230寝室</view>
		</view>
		<!-- 地图组件的使用 -->
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:114.006531,
				latitude:33.0096657,
				// scale:50,
				markers:[
					{
						longitude:114.008531,
						latitude:33.006657,
						iconPath:'../../static/logo.png',
						width:30,
						height:30
						
					}
				]
			}
		},
		methods: {
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:"17837034022"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 28rpx;
			view{
				line-height: 70rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}

</style>
