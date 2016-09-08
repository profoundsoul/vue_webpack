
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
	plugins:[
		new HtmlWebpackPlugin({
			template:'index.html',
			filename:'../index.html',
			minify:{
				removeComments:true,
				collapseWhitespace:true,
				removeAttributeQuotes:true
			}
		}),
		new ExtractTextPlugin('[name][chunkhash].css',{
				allChunks:true
		})],
	vue:{
		loaders:{
			css:ExtractTextPlugin.extract('css'),
			sass:ExtractTextPlugin.extract('css!sass-loader')
		}
	},
	devServer:{
		noInfo:true,
		historyApiFallback:true,
		port:8090
	},
	devtool:'#eval-source-map'
};