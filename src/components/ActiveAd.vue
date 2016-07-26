<template>
	<div class="ad" id="picBox">
		<div class="pic">
			<ul :style="margin">
				<li v-for="data in activeAdData"><img :src="data.name" alt=""></li>
			</ul>
		</div>
	</div><!-- ad结束 -->
</template>
<script>
	let $ = require('jquery');
	export default{
		ready(){
			let vueThis = this;
			this.$http.get('/activeAd.json',{ params: vueThis.$route.params }).then((rep) => {
		  		let httpData = rep.json();
				console.log('test');
				if(httpData){
		   			vueThis.activeAdData = httpData;
		   		}
		   	});
		   	setInterval(this.slider,3000);
	   	},
	   	data(){
	   		return {
	   			activeAdData:{},
	   			Index:0

	   		}
	   	},
	   	computed:{
	   		margin(){
	   			return {
	   				'margin-left': -1000*this.Index + 'px'
	   			}
	   		}
	   	},
	   	methods:{
	   		slider(){
	   			let length = $(this.activeAdData).length;
	   			if (this.Index < length - 1) {
	   				this.Index++;
	   			}else{
	   				this.Index = 0;
	   			}
	   			console.log(this.Index);
	   		}
	   	}
   	}
</script>
<style scope>
    .pic{overflow: hidden;}
    li{float:left;}
</style>