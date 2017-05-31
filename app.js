var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require('path');
var compression = require('compression');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

// Global vars
app.use(function(req, res, next) {
	res.locals.errors = null;
	next();
});

// Compression
app.use(compression({
  threshold: 0,
  filter: () => true,
}));

// Overview Page
app.get('/', function (req, res) {
// Get your data here, like an api request
})

// Detail page
app.get('/detail', function (req, res) {
// Get your data here, like an api request
})

app.listen(3000, function() {
	console.log("Server started on port 3000...");
})
