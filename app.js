var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var compression = require('compression');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

var savedStories = [];

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
  var articles = storydata.articles.filter(function (val) {
      return val.id === id;
  })[0];
  res.render('detail.ejs', {article: articles});
});

io.on('connection', function(socket) {
  socket.on('suggest', function(data) {
    io.sockets.emit("suggest", data);
    console.log(data.title)
  });
});
