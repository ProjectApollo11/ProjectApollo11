var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(__dirname + 'public'));

var numuser = 0;

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req,res){
    res.sendFile(__dirname + '/login.html')
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
// trying to serve the image file from the server
/*io.on('connection', function(socket){
  fs.readFile(__dirname + '/images/image.jpg', function(err, buf){
    // it's possible to embed binary data
    // within arbitrarily-complex objects
    socket.emit('image', { image: true, buffer: buf.toString('base64') });
    console.log('image file is initialized');
  });
});*/

http.listen(3000,function(){
	console.log('listening on *:3000');
});