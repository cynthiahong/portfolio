var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

var app = express();


// Configuration
app.engine('handlebars', handlebars({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

// Load routes
require('./app/routes/routes')(app);


/*
var json = require('./data.json');
app.get('/', function(req,res){
	res.json(json);
}); */


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
