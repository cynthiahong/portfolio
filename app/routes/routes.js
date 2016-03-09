
module.exports = function (app) {
	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/projects', function(req, res){
		res.render('projects');
	});

	app.get('/pierre', function(req, res){
		res.render('pierre');
	});

	app.get('/portfolio_project', function(req, res){
		res.render('portfolio_project');
	});
	app.get('/mobile_playlist', function(req, res){
		res.render('mobile_playlist');
	});
}
