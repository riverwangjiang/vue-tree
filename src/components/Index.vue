<template>
	<top></top>
	<logo></logo>
	<na></na>
	<ad></ad>
	<main></main>
	<copyright></copyright>
</template>
<script>
	let Top = require('./Top.vue');
	let Logo = require('./Logo.vue');
	let Nav = require('./Nav.vue');
	let ActiveAd = require('./ActiveAd.vue');
	let Main = require('./Main.vue');
	let Copyright = require('./Copyright.vue');
	export default{
		ready(){
		this.setTitle('首页');
	   },
		components:{
			'top':Top,
			'logo':Logo,
			'na':Nav,
			'ad':ActiveAd,
			'main':Main,
			'copyright':Copyright
		}
	}
</script>