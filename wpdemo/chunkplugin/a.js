/**
 * Created by mumu on 2016/8/23.
 */
var instance = require('./base');
var util = require('./util');
var popup = require('./popup');

require.ensure(['./c'], function(require){
    var cc = require('./c');
    console.log(cc.getCurrentUser());
});

module.exports = {
    name:'linq',
    getValue:function(){
        return 'uniqueID'
    }
};

