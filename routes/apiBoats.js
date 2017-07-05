var express = require('express');
var router = express.Router();
var config = require('../config/database').config;
var mysql = require('mysql');
var pool = mysql.createPool(config);

router.get('/', function(req, res){
  var query = 'SELECT * FROM owt_boats';
  pool.query(query, function(error, results){
    if(error) throw error;
    res.send({success:true, boats: results});
  });
})
.post('/', function(req, res){
  var query = 'INSERT INTO owt_boats (boat_name, boat_year) VALUES(?,?)';
})
.delete('/:boatId', function(req, res){

});

module.exports = router;