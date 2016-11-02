var express = require('express');
var router = express.Router();

var query = require('../bin/connet');

/* GET home page. */
router.get('/', function(req, res, next) {
	query('select * from encyclopaedia;', function( data ){
		res.render('admin', { title: 'Admin' });
	});
});

module.exports = router;
