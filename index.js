var express = require('express');
var consolidate = require('consolidate');
var bodyparser = require('body-parser');
var performQuery = require('./database');

var app = express();

app.engine('html', consolidate.nunjucks);

app.set('views', './views');
// app.use('/static', express.static('./static'));
app.use(express.static('./static'));
app.use(bodyparser.urlencoded());

app.get('/', function(request, respond){
	var name = request.query.username;
	console.log(name);
	respond.render('index.html');
});

app.get('/profile', function(request, respond){
	var username = request.params.username;
	respond.render('profile.html',{
		name: username
	});
});

app.get('/login', function(request, respond){
	//var name = request.query.username;
	//console.log(name);

	respond.render('login.html');

});

app.post('/concerns', function(request, response){
	//get message
	var query = "INSERT INTO complaint (description) VALUES ('" +concerns+ "')"; //floor, description, date, id
	//store message onto db
	response.redirect('/profile');
});


app.listen(3000, function () {
	console.log('Server of voiceup is running on port 3000...')
});
