var express = require('express');
var router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var multiparty = require('multiparty');

var formidable = require('formidable');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/upload', function(req, res, next) {
	var form = new multiparty.Form(),
		dir = "public/images/temp";
		form.uploadDir = dir; //改变临时目录

	form.parse(req, function(err, fields, files) {
		var file = files.file_data[0].path.match(/\w+\.\w+$/)[0];

		res.json({
			"code": 0,
			"msg": "",
			"data": {
				src: './images/temp/' + file,
			}
		});
	});
});


/* GET users handler. */
router.route('/:id')
	
	// 查询指定用户
	.get(function(req, res, next) {
		res.send({
			'status': 0,
			'message': 'select user:' + JSON.stringify(req.params)
		});
		res.end();
	})

	// 添加用户
	.post(function(req, res, next) {
		res.send({
			'status': 0,
			'message':'add user:' + JSON.stringify(req.params)
		});
		res.end();
	})

	// 删除用户
	.delete(function(req, res, next) {
		res.send({
			'status': 0,
			'message':'delete user:' + JSON.stringify(req.params)
		});
		res.end();
	})

	// 更新用户
	.put(function(req, res, next) {
		res.send({
			'status': 0,
			'message':'update user:' + JSON.stringify(req.params)
		});
		res.end();
	})

module.exports = router;
