/**
 * Created by mumu on 2016/8/24.
 */
var tt=require('./dep/test');
console.log(tt.name);

var Vue = require('Vue');
module.exports = {
    getInstance: function () {
        return {title: 'getInstance'};
    }
};