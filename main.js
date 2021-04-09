import Vue from 'vue'
import App from './App'
// 全局使用，因此将它挂载到全局上（这里的myRequest还没生效）
import { myRequest } from './pages/util/api.js'
//绑到原型链上，使其生效
Vue.prototype.$myRequest = myRequest

// 全局的过滤器
Vue.filter('formatDate',(date)=>{
	const newDate = new Date(date)
	const year = newDate.getFullYear()
	const moth = (newDate.getMonth()+1).toString().padStart(2,0)
	// .toString().padStart(2,0)将数值转换为字符串，如果满足两位就进行补0
	const day = newDate.getDate().toString().padStart(2,0)
	// return year+moth+day 数值求和
	return year+'-'+moth+'-'+day
})



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
