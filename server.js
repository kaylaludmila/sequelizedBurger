var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var models = require('./models');
// var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');
app.use('/', router);


app.listen(process.env.PORT || 8080);

// app.listen(PORT, function(){
//     console.log('Eat some burgers on:  ' + PORT);
// });