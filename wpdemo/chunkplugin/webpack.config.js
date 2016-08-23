/**
 * Created by mumu on 2016/8/23.
 */

var webpack = require("webpack");
module.exports={
    entry:{
        a:'./a',
        b:'./b',
        util:'./util'
    },
    output:{
        path:'./dist',
        filename:'[name].js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common-util.js', ['util'])
    ]
};
