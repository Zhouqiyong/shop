(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-detail-goods-detail"],{"006c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniGoodsNav",props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=r},"0226":function(t,e,n){"use strict";var r=n("2c70"),i=n.n(r);i.a},"044f":function(t,e,n){"use strict";var r=n("0f07"),i=n.n(r);i.a},"0f07":function(t,e,n){var r=n("bc9f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("29ed3538",r,!0,{sourceMap:!1,shadowMode:!1})},1235:function(t,e,n){"use strict";n.r(e);var r=n("006c"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,u,"next",t)}function u(t){r(a,i,o,c,u,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"2bf2":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniGoodsNav:n("a086").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"good_detail"},[r("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:"true"}},t._l(t.swipersData,(function(t,e){return r("v-uni-swiper-item",{key:e},[r("v-uni-image",{attrs:{src:n("4dcd")}})],1)})),1),r("v-uni-view",{staticClass:"box1"},[r("v-uni-view",{staticClass:"price"},[r("v-uni-text",[t._v("￥"+t._s(t.info.sell_price))]),r("v-uni-text",[t._v("￥"+t._s(t.info.market_price))])],1),r("v-uni-view",{staticClass:"goods_name"},[t._v(t._s(t.info.title))])],1),r("v-uni-view",{staticClass:"box2"},[r("v-uni-view",[t._v("货号："+t._s(t.info.goods_no))]),r("v-uni-view",[t._v("库存："+t._s(t.info.stock_quantity))])],1),r("v-uni-view",{staticClass:"box3"},[r("v-uni-view",{staticClass:"tit"},[t._v("详情介绍")]),r("v-uni-view",{staticClass:"content"},[r("v-uni-rich-text",{attrs:{nodes:t.content}})],1)],1),r("v-uni-view",{staticClass:"goods_nav"},[r("uni-goods-nav",{attrs:{fill:!0,options:t.options,buttonGroup:t.buttonGroup},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1)],1)},o=[]},"2c70":function(t,e,n){var r=n("a95d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("ae4577d0",r,!0,{sourceMap:!1,shadowMode:!1})},"3cf6":function(t,e,n){"use strict";n.r(e);var r=n("cc96"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"4dcd":function(t,e,n){t.exports=n.p+"static/img/2.6e1c618c.jpg"},"873e":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-goods-nav"},[n("v-uni-view",{staticClass:"uni-tab__seat"}),n("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[n("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,r){return n("v-uni-view",{key:r,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(r,e)}}},[n("v-uni-view",{staticClass:"uni-tab__icon"},[n("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),n("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),n("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?n("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,r){return n("v-uni-view",{key:r,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:e.backgroundColor,color:e.color},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.buttonClick(r,e)}}},[n("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},o=[]},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=y;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={},b={};b[a]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(P([])));x&&x!==r&&i.call(x,a)&&(b=x);var w=C.prototype=m.prototype=Object.create(b);k.prototype=w.constructor=C,C.constructor=k,C[u]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,n,r){var i=new E(y(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),z(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;z(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function y(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new R(r||[]);return o._invoke=j(t,n,a),o}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function m(){}function k(){}function C(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,r,o,a){var c=_(t[n],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(s).then((function(t){u.value=t,o(u)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function j(t,e,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return N()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=G(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=_(t,e,n);if("normal"===u.type){if(r=n.done?h:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}function G(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,G(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=_(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b44":function(t,e,n){"use strict";n.r(e);var r=n("2bf2"),i=n("3cf6");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("0226");var a,c=n("f0c5"),u=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"54dd6de1",null,!1,r["a"],a);e["default"]=u.exports},a086:function(t,e,n){"use strict";n.r(e);var r=n("873e"),i=n("1235");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("044f");var a,c=n("f0c5"),u=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"dce717e6",null,!1,r["a"],a);e["default"]=u.exports},a95d:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.good_detail uni-swiper[data-v-54dd6de1]{height:%?700?%}.good_detail uni-swiper uni-image[data-v-54dd6de1]{width:100%;height:100%}.good_detail .box1[data-v-54dd6de1]{padding:10px;border-bottom:%?10?% solid #eee}.good_detail .box1 .price[data-v-54dd6de1]{font-size:%?36?%;color:#b50e03;line-height:%?80?%}.good_detail .box1 .price uni-text[data-v-54dd6de1]:nth-child(2){font-size:%?28?%;text-decoration:line-through;color:#ccc;margin-left:%?20?%}.good_detail .goods_name[data-v-54dd6de1]{font-size:%?30?%;line-height:%?60?%}.good_detail .box2[data-v-54dd6de1]{padding:0 10px;font-size:%?28?%;line-height:%?60?%;border-bottom:%?10?% solid #eee}.good_detail .box3[data-v-54dd6de1]{padding:0 10px;padding-bottom:%?50?%}.good_detail .box3 .tit[data-v-54dd6de1]{font-size:%?28?%;border-bottom:1px solid #eee;line-height:%?70?%}.good_detail .box3 .content[data-v-54dd6de1]{padding:%?10?% %?5?%;font-size:%?26?%;line-height:%?50?%}.good_detail .goods_nav[data-v-54dd6de1]{position:fixed;bottom:0;width:100%}',""]),t.exports=e},bc9f:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex[data-v-dce717e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-goods-nav[data-v-dce717e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-tab__cart-box[data-v-dce717e6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-dce717e6]{padding:0 5px}.uni-tab__cart-sub-right[data-v-dce717e6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-tab__right[data-v-dce717e6]{margin:5px 0;margin-right:10px;-webkit-border-radius:100px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-dce717e6]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-dce717e6]{width:18px;height:18px}.image[data-v-dce717e6]{width:18px;height:18px}.uni-tab__text[data-v-dce717e6]{margin-top:3px;font-size:%?24?%;color:#646566}.uni-tab__cart-button-right[data-v-dce717e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-dce717e6]{font-size:%?28?%;color:#fff}.uni-tab__cart-button-right[data-v-dce717e6]:active{opacity:.7}.uni-tab__dot-box[data-v-dce717e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;right:-2px;top:2px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-tab__dot[data-v-dce717e6]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;-webkit-border-radius:15px;border-radius:15px}.uni-tab__dots[data-v-dce717e6]{padding:0 4px;-webkit-border-radius:15px;border-radius:15px}.uni-tab__color-y[data-v-dce717e6]{background-color:#ffa200}.uni-tab__color-r[data-v-dce717e6]{background-color:red}',""]),t.exports=e},cc96:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),o=r(n("a086")),a={data:function(){return{id:0,swipersData:[],info:{},content:{},options:[{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png",text:"客服"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png",text:"店铺",info:2,infoBackgroundColor:"#ff0000",infoColor:"#fff"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png",text:"购物车",color:"#646566",info:2}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},components:{uniGoodsNav:o.default},onLoad:function(t){this.id=t.id,this.getSwipers(),this.getInfoData(),this.getInfoContent()},methods:{getSwipers:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getthumimages/"+t.id});case 2:n=e.sent,t.swipersData=n.data.message,console.log(n);case 5:case"end":return e.stop()}}),e)})))()},getInfoData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/goods/getinfo/"+t.id});case 2:n=e.sent,console.log("..........",n),t.info=n.data.message[0];case 5:case"end":return e.stop()}}),e)})))()},getInfoContent:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/goods/getdesc/"+t.id});case 2:n=e.sent,t.content=n.data.message[0].content;case 4:case"end":return e.stop()}}),e)})))()},onClick:function(t){uni.showToast({title:"点击".concat(t.content.text),icon:"none"})},buttonClick:function(t){console.log(t),this.options[2].info++}}};e.default=a}}]);