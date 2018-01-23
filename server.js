var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.disable('x-powered-by');

app.set('port', process.env.PORT || 80);

app.use(express.static(__dirname + '/public'));



app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//more imports here



app.get('/', function(req, res){
    res.render('home');
 });

app.get('/home', function(req, res){
    res.render('home');
 });


app.listen(app.get('port'), function(){
    console.log("Express started on http://localhost:" + app.get('port') + " press ctrl c to terminate.");
});