export default (router)=>{
	router.map({
		'/':{
			name:'index',
			component:(resolve)=>{
				require(['./src/index.vue'], resolve)
			}
		}
	});
}