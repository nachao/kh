var express = require('express');
var router = express.Router();

var query = require('../bin/connet');

/* GET home page. */
router.get('/', function(req, res, next) {
	query('select * from encyclopaedia;', function( data ){
		res.render('index', { title: 'Express', data: data, t: [1,2,3] });
	});
});



/* 公共接口 */


/* 上传图片. */
router.post('/upload', function(req, res, next) {
	res.jspn({
		"code": 0,	 	// 0表示成功，其它失败
		"msg": "", 		// 提示信息 //一般上传失败后返回
		"data": {
			src: "图片路径",
		}
	});
});

module.exports = router;
