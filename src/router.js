export function configRoute(Router,TopVue){
	let index = require('./components/Index.vue');
	Router.map({
		'/index/':{
			name:'index',
			component: index
		},
	    '/list/': {
	    	name:'list',
	        component: reslove => { return require(['./components/List.vue'],reslove) }
	     }
	     
	});

	Router.redirect({
	    '*':"/index/"
	});

	Router.start(TopVue, '#root');
}