var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    passport       = require('passport'),
    morgan         = require('morgan'),
    session        = require('express-session'),
    port           = 3000 || process.env.PORT,
    app            = express();

mongoose.connect('mongodb://localhost/med_models');

var userController     = require('./controllers/userController'),
		homeController     = require('./controllers/homeController');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(session({secret: 'secretsecretsecret', resave: true, saveUninitialized: true}))
app.use(passport.initialize());

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use('/user', userController);
app.use('/home', homeController);

app.get('/', function(req,res){
	res.redirect('/home');
})

 app.listen(port, function(){
 	console.log('How are you today dear?');
 })