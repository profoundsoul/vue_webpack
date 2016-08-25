/**
 * Created by mumu on 2016/8/23.
 */

var instance = require('./base');
var util = require('./util');

require.ensure(['./c'], function(require){
    var cc = require('./c');
    console.log(cc.getCurrentUser());
});

module.exports={
    name:'check',
    getAddr:function(){
        return 'hongkong';
    }
};


