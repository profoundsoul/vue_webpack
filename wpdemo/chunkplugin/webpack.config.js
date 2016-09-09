/**
 * Created by mumu on 2016/8/23.
 */

var webpack = require("webpack");

var allCommonChunk = new webpack.optimize.CommonsChunkPlugin({
    name:'common',
    //filename:'common.js'
    //chunks:['a','b'],
    //minChunks:2
});
var vendorChunk = new webpack.optimize.CommonsChunkPlugin({
    name:'vendor1',
    chunks:['vendor1', 'verdor2'],
    minChunks:Infinity
});

var htmlPlugin = new require('html-webpack-plugin');


module.exports={
    entry:{
        a:'./a',
        b:'./b',
        //vendor:['../../libs/jquery-1.12.3', '../../libs/require', , '../../libs/underscore', '../../libs/backbone']
    },
    output:{
        path:'./dist',
        publicPath:'./dist/',
        filename:'[name].js',
        chunkFilename:'[name].chunk.js'
        //filename:'[name].[chunkhash:8].js',
        //chunkFilename:'[name].chunk.js'
        // 把依赖打包到一个独立入口中
        //library: ["MyLibrary", "[name]"],
        //libraryTarget: "umd"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('commin.js')
    ],
    devServer:{
        noInfo:true,
        historyApiFallback:true,
        port:8089
    }
};
