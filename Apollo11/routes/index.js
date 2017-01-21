var express = require('express');
var app = require('express')();
var router = express.Router();
var io = require('socket.io')();



var numuser = 0;

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  numuser++;
  console.log('user' + numuser +' connected');
  socket.on('disconnect', function(){
  	console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
  	console.log('message: ' + msg);
  });
});

io.on('connection',function(socket){
	socket.on('user image',function(image){
		io.emit('addimage','Image Received: ',image);
	});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
