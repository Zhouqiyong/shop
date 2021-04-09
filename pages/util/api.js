// 数据请求接口的封装
const BASE_URL = 'http://localhost:8082'
// 暴露一个全局挂载函数
export const myRequest = (options)=>{
	// Promise异步处理：结束后调用成功的时候resolve和失败的时候reject
	return new Promise((resolve,reject)=>{
		uni.request({
			// 地址：固有的+事件中的url
			url:BASE_URL+options.url,
			// 方法：POST || GET
			method: options.method || 'GET',
			// 是否含有数据
			data: options.data || {},
			// 成功的消息
			success:(res)=> {
				if(res.data.status !==0){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:'请求接口失败'
				})
			reject(err)
			}
		})
	})
}
// 调用的时候
// myRequest({
// 	url: '/api/getlunbo',
// 	method: 'POST',
// 	data{
		
// 	}
// })