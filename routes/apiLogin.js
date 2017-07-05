var express = require('express');
var router = express.Router();
var config = require('../config/database').config;
var mysql = require('mysql');
var pool = mysql.createPool(config);

router.post('/', function(req, res) {
  var user = req.body;
  var query = 'SELECT * FROM owt_users WHERE user_name = "' + user.username + '"';
  pool.query(query, function(error, results){
    if(error) throw error;
    if(results.length == 1 && results[0].user_password == user.password) {
      res.send({success: true});
      return;
    }
    res.send({success:false});
    });
});

module.exports = router;