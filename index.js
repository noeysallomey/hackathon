var express = require('express');
var consolidate = require('consolidate');
var bodyparser = require('body-parser');
var Concern = require('./models').Concern;

var app = express();

app.engine('html', consolidate.nunjucks);

app.set('views', './views');
app.use(express.static('./static'));
app.use(bodyparser.urlencoded());

app.get('/', function(request, respond){
	respond.render('index.html');
});

app.get('/map', function(request, respond){
	respond.render('concerns.html');
});

app.get('/admin', function(request, respond){
	respond.render('admin.html');
});

app.get('/malaxkubo', function(request, respond){
	respond.render('malaxkubo.html');
});

app.get('/mainfield', function(request, respond){
	respond.render('mainfield.html');
});

app.get('/library', function(request, respond){
	respond.render('library.html');
});

app.get('/guesthouse', function(request, respond){
	respond.render('guesthouse.html');
});

app.get('/canteen', function(request, respond){
	respond.render('canteen.html');
});

app.get('/clinic', function(request, respond){
	respond.render('clinic.html');
});

app.get('/dorms', function(request, respond){
	respond.render('dorms.html');
});

app.get('/asfield', function(request, respond){
	respond.render('asfield.html');
});

app.get('/asleft', function(request, respond){
	respond.render('asleft.html');
});

app.get('/aslobby', function(request, respond){
	respond.render('aslobby.html');
});

app.get('/asright', function(request, respond){
	respond.render('asright.html');
});

app.get('/askubo', function(request, respond){
	respond.render('askubo.html');
});

app.get('/vballcourt', function(request, respond){
	respond.render('vballcourt.html');
});

app.get('/bballcourt', function(request, respond){
	respond.render('bballcourt.html');
});

app.get('/management', function(request, respond){
	respond.render('management.html');
});

app.get('/bballkubo', function(request, respond){
	respond.render('bballkubo.html');
});

app.get('/undergrad', function(request, respond){
	respond.render('undergrad.html');
});

app.post('/postconcern', function(request, respond){
	var bldng1 = request.body.bldng;
	var bldngflr1 = request.body.bldngflr;
	var specLoc1 = request.body.specLoc;
	var concernMainMessage1 = request.body.concernMainMessage;
	var date1 = request.body.date;
	var concernee1 = request.body.concernee;
	Concern.create({concernBuilding:bldng1, concernBuildingFloor: bldngflr1, concernLocation: specLoc1, concernMsg: concernMainMessage1, dateLogged:date1, studentID:concernee1}).then(function(){
		respond.redirect('/thanks');
	})
});

app.get('/thanks', function(request, respond){
	respond.render('thanks.html');
});

app.listen(3000, function () {
	console.log('Server of voiceup is running on port 3000...')
});
