var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// var eat = require('../models/burger.js');

var models = require('./models');

app.get('/', function(req,res) {
	res.redirect('/burger')
});

app.get('/burger', function(req,res) {
	eat.selectAll(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burger/create', function(req,res) {
	var newBurger = req.body.newBurger;
	eat.insertOne([newBurger], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;
	eat.updateOne({devoured : req.body.devoured }, condition, function(){
		res.redirect('/burger');
	});
});


module.exports = router;


