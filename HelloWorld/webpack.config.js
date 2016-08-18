/**
 * Created by mumu on 2016/8/18.
 */
var path = require('path');

var ROOT_PATH= path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, '');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports={
    debug:false,
    entry:APP_PATH+'/main.js',
    output:{
        path:BUILD_PATH,
        filename:'build.js'
    },
    module:{
        loaders:[{
            test:/\.vue$/,
            loader:'vue'
        },{
            test:/\.(png|jpg|eot|svg|ttf|woff)/,
            loader:'url?limit=40000'
        }]
    }
};