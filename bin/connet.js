//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'nachao',
		database:'kouhong'
	});

connection.connect();

module.exports = function ( sql, callback ) {

	//查询
	connection.query(sql, function(err, rows, fields) {
		if (err)
			throw err;

		callback && callback(JSON.parse(JSON.stringify(rows)));
	});
}


//关闭连接
// connection.end();