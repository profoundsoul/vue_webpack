/**
 * Created by mumu on 2016/8/23.
 */

var webpack = require("webpack");
module.exports={
    entry:{
        a:'./a',
        b:'./b'
    },
    output:{
        path:'./dist',
        publicPath:'./dist/',
        filename:'[name].[chunkhash:8].js',
        chunkFilename:'[name].chunk.js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('commin.js')
    ]
};
