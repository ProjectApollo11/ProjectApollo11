var express = require('express');
var router = express.Router();
var io = require('socket.io')();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/Apollo11');


var numuser = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.post('/adduser', function(req,res){
  

  var db = req.db;
  
  
  console.log("username " + req.body.username);
  console.log(req.body.password);

  console.log('2');
  var userName = req.body.username;
  var passWord = req.body.password;

  console.log(userName);
  console.log(passWord);

  var collection = db.get('usercollection');

  console.log('collection is ' + collection);

  collection.insert({
    "username" : userName,
    "password" : passWord
  }, function(err,doc){
    if(err){
      res.send("There is a problem adding the information to the database.");
    }
    else{
      res.render('main');
    }
  
  });
});

router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.get('/login', function(req,res){
    // var db = req.db;

    // var userName = req.
    res.render('login');
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



module.exports = router;
