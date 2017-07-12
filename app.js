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
users = [];
connections = [];

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
io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', function(data) {
    users.splice(users.indexOf(socket.username), 1);

    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send message
  socket.on('send message', function(data) {
    io.sockets.emit('new message', {
      msg: data,
    });
    console.log(data);
  });
});

// Start server on port 3000
server.listen(3000, function() {
  console.log("Server started on port 3000...");
});
