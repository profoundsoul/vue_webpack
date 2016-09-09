<template>
	<div>{{title}}</div>
	<div>{{describe}}</div>
</template>
<script >
	export default {
		data (){
			return {
				title:'this is index',
				describe:'my index'
			}
		},
		route:{
			data:function(transition){
				console.log(transition);
			}
		}
	}
</script>