require('./common/index.sass');
let Vue = require('vue');
let VueRouter = require('vue-router');
let VueResource = require('vue-resource');
let Lib = require('./common/lib');
Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter();


//全局函数 调用顶层设置title
Vue.mixin({
  methods: {
  	setTitle: function (val) {
	  	if(val) this.$dispatch('setTile', val);
	},
	setLoadStatus: function (val) {
	  	this.$dispatch('setLoadStatus', val);
	}
  },
  route: {
    activate (){
      console.log('activate');
    }
  }
});

//顶层组件 设置title
let topApp = Vue.extend({
	data (){
		return {
			loadStatus: true
		}
	},
	events: {
	    'setTitle': function (title) {
	      Lib.setTitle(title);
	    },
	    'setLoadStatus': function (val) {
	      this.loadStatus = val;
	    }
	}
});

//加载路由配置
let route = require('./router');
route.configRoute(router,topApp);