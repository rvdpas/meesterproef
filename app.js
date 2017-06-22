var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var compression = require('compression');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

users = [];
connections = [];

server.listen(3000, function() {
  console.log("Server started on port 3000...");
});

app.set('view engine', 'ejs' );

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

var storydata = require('./stories.json');

app.get('/', function(req, res){
  res.render('index.ejs', {stories: storydata});
});

app.get('/:id', function(req, res){
  var id = req.params.id;
  var article = storydata.articles.filter(function (val) {
      return val.id === id;
  })[0];
  res.render('detail.ejs', {article: article});
});

// io.sockets.on('connection', function(socket) {
//   connections.push(socket);
//   console.log('Connected: %s sockets connected', connections.length);

//   // Disconnect
//   socket.on('disconnect', function(data) {
//     users.splice(users.indexOf(socket.username), 1);
//     updateUsernames();

//     connections.splice(connections.indexOf(socket), 1);
//     console.log('Disconnected: %s sockets connected', connections.length);
//   });

//   // Send message
//   socket.on('send message', function(data) {
//     io.sockets.emit('new message', {
//       msg: data,
//       user: socket.username
//     });
//     console.log(data);
//   });

//   // New user
//   socket.on('new user', function(data, callback) {
//     callback(true);
//     socket.username = data;
//     users.push(socket.username);
//     updateUsernames();
//     console.log(socket.username);
//   });

//   // Update users
//   function updateUsernames() {
//     io.sockets.emit('get users', users);
//   };
// });
