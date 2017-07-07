var express = require('express');
var http = require('http');
var path = require('path');
var compression = require('compression');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

// Set templating engine
app.set('view engine', 'ejs' );

app.set('views', path.join(__dirname, 'views'));
// set static path
app.use(express.static(path.join(__dirname, 'public')));

// Save json file in a variable
var storydata = require('./stories.json');

// Compression
app.use(compression({
  threshold: 0,
  filter: () => true,
}));

// Get homepage
app.get('/', function(req, res){
  res.render('index.ejs', {stories: storydata});
});

// Get results page based on the same id of the article
app.get('/:id', function(req, res){
  var id = req.params.id;
  var articles = storydata.articles.filter(function (val) {
      return val.id === id;
  })[0];
  res.render('detail.ejs', {article: articles});
  console.log(articles);
});

// Start socket connection to send data between the client and server
io.on('connection', function(socket) {
  socket.on('suggest', function(data) {
    io.sockets.emit("suggest", data);
    console.log(data.title)
  });
});

// Start server on port 3000
server.listen(3000, function() {
  console.log("Server started on port 3000...");
});
