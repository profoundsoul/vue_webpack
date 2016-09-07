
var webpack = require('webpack');
module.exports={
	entry:{
		app:'./src/main'
	},
	output:{
		path:'./dist/script',
		filename:'[name][chunkhash:10].js',
		ChunkFileName:'[name][chunkhash].js'
	},
	module:{
		loaders:[{
				test:/\.vue$/,
				loader:'vue'
			},{
				test:/\.js$/,
				loader:'babel',
				exclude:/node_modules/
			}
		]
	}
};