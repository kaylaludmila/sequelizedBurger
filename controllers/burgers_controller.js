var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var models = require('../models');

router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {
	models.burgerSeq_db.findAll().then(function(data){
		var hbsObject = {burgers : data}
		res.render('index', hbsObject);
	});
});

router.post('/burger/create', function(req,res) {
	models.burgerSeq_db.create({
		burger_name: req.body.newBurger
	});
		res.redirect('/burger');
});

router.put('/burger/update/:id', function(req,res) {
	models.burgerSeq_db.update({devoured : req.body.devoured}, {where: {id:req.params.id}}).then(function(){
		res.redirect('/burger');
	});
});


module.exports = router;


