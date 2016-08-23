/**
 * Created by mumu on 2016/8/23.
 */
var getUrl = function(){
    return location.href;
};
var getSearch = function(){
    return location.search;
};

module.exports = {
    getUrl:getUrl,
    getSearch:getSearch
};


