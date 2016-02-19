var router		 = require('express').Router(),
		passport   = require('passport'),
		Address		 = require('../models/address.js'),
		Doctor		 = require('../models/doctor.js'),
		Med				 = require('../models/med.js'),
		Pharmacy	 = require('../models/pharmacy.js'),
		User 	 		 = require('../models/users.js');



//SIGNIN
router.get('/', function(req,res){
	res.locals.login = req.isAuthenticated();
	User.find({}, function(err,data){
			res.render('users/index.ejs', {info: data});
		})
})

//SHOW
router.get('/:id', isLoggedIn, function(req,res){
	req.params.id == req.user.id ? res.locals.usertrue = true : res.locals.usertrue = false;
	User.findById(req.params.id, function(err,data){
		res.render('users/show.ejs', {info: data});
	})
})

//make post router for adding info about yourself to send to database

//DELETE
router.delete('/:id', function(req,res){
	User.findByIdAndRemove(req.params.id, function(err, data){
		res.redirect('/users/');
	})
});

//=================================================
// AUTHENTICATION
//=================================================
// --SIGNUP
router.post('/', passport.authenticate('local-signup', { 
    failureRedirect: '/users' }), function(req, res) {
    res.redirect('/users/' + req.user.id);
});

//LOGIN
router.post('/login', passport.authenticate('local-login', { 
    failureRedirect: '/users' }), function(req, res) {
    res.redirect('/users/' + req.user.id);
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/users');
}

// LOGOUT
router.get('/', function(req,res){
	req.logout();
	res.redirect('/');
})


//===================================================
//ADD MEDS
router.post('/:id', function(req,res){
	// console.log(req.body);
	var newMed = new Med(req.body);
	// console.log(newLocal);
	// console.log(req.params.id);
	User.findById(req.params.id, function(err,data){
		// console.log(data.locations);
		data.meds.push(newLocal);
		// console.log(data.locations);
		data.save(function(err,data){
			res.redirect('/users/' + req.params.id);
		})		
	})

});

module.exports = router;















