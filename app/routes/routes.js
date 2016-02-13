/* var data = require("../../data.json"); */

module.exports = function (app) {
	app.get('/', function(req, res){
		res.render('index'); /*
		res.render('index', data);*/
	});

}
