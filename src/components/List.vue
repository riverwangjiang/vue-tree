<template>
	<top></top>
	<logo></logo>
	<na></na>
	<ad></ad>
	<list-main></list-main>
	<copyright></copyright>
</template>
<script>
	let Top = require('./Top.vue');
	let Logo = require('./Logo.vue');
	let Nav = require('./Nav.vue');
	let Ad = require('./Ad.vue');
	let ListMain = require('./ListMain.vue');
	let Copyright = require('./Copyright.vue');
	export default{
		components:{
			'top':Top,
			'logo':Logo,
			'na':Nav,
			'ad':Ad,
			'list-main':ListMain,
			'copyright':Copyright
		}
	}
</script>