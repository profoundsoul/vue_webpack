
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
	},
	vue:{
		loaders:{
			css:ExtractTextPlugin.extract('css'),
			sass:ExtractTextPlugin.extract('css!sass-loader')
		}
	}
};