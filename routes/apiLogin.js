var express = require('express');
var router = express.Router();
var mysql = require('../app/database/mysql');

var users = [
  {
    username: 'fred',
    password: 'secret'
  }
];

exist = function(user, callback){
  for(var i=0, len=users.length; i<len; i++){
    if(users[i].username == user.username && users[i].password == user.password){
      return callback(true);
    }
  }
  return callback(false);
};

router.post('/', function(req, res) {
  exist(req.body, function(result){
    if(!result){
      res.send({success: false});
    }else{
      res.send({success: true});
    }
  });
});

module.exports = router;