webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mumu on 2016/8/23.
	 */
	var instance = __webpack_require__(1);
	var util = __webpack_require__(2);
	var popup = __webpack_require__(3);

	__webpack_require__.e/* nsure */(1, function(require){
	    var cc = __webpack_require__(4);
	    console.log(cc.getCurrentUser());
	});

	module.exports = {
	    name:'linq',
	    getValue:function(){
	        return 'uniqueID'
	    }
	};



/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by mumu on 2016/8/25.
	 */
	module.exports={
	    name:'弹窗'
	}

/***/ }
]);