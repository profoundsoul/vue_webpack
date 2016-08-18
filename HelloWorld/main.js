
var Vue = require('vue');
var Hello = require('./src/index.vue');

var vm = new Vue({
    el:'body',
    components:{
        hello:Hello
    }
});