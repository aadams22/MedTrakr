var router		 = require('express').Router(),
		passport   = require('passport'),
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
//!!!CURRENT ISSUE: need a different route 
//for adding doctor or else it will push into meds and won't work 
router.post('/:id', function(req,res){
	var newMed = new Med(req.body);
	// console.log("This is the newMed: " + newMed);
	User.findById(req.params.id, function(err,data){
		data.meds.push(newMed);
		// console.log("this is data.meds: " + data.meds);
		data.save(function(err,data){
			res.redirect('/users/' + req.params.id);
		})		
	})
});


//ADD INFO TO PROFILE && EDIT MEDS
router.put('/:id', function(req,res){
	User.findByIdAndUpdate(req.params.id, req.body, function(err,data){
		res.redirect('/users/' + req.params.id);
	})
});



module.exports = router;


	// console.log("This is req.body: " + req.body);
	// console.log("This is the data: " + data);




