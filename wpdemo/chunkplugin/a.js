/**
 * Created by mumu on 2016/8/23.
 */
var instance = require('./base');
var util = require('./util');


require.ensure(['./c'], function(require){
    var cc = require('./c');
    console.log(cc.getCurrentUser());
},'a.demand');

module.exports = {
    name:'linq',
    getValue:function(){
        return 'uniqueID'
    }
};

