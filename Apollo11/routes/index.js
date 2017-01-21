var express = require('express');
var router = express.Router();
var io = require('socket.io')();



var numuser = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
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



router.post('/adduser', function(req,res){
  var db = req.db;
  
  console.log(req.body.username);
   console.log(req.body.password);

  var userName = req.body.username;
  var passWord = req.body.password;

  collection.insert({
    "username" : userName,
    "password" : password
  }, function(err,doc){
    if(err){
      res.send("There is a problem adding the information to the database.");
    }
    else{
      res.redirect("main");
    }
  
  });
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
