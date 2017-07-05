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
  var newBoat = req.body;
  var args = [newBoat.name, newBoat.year];
  var query = 'INSERT INTO owt_boats (boat_name, boat_year) VALUES(?,?)';
  pool.query(query, args, function(error, results){
    if(error) throw error;
    res.send({success:true});
  });
})
.delete('/:boatId', function(req, res){
  var args = [req.params.boatId];
  var query = 'DELETE FROM owt_boats WHERE boat_id = ?';
  pool.query(query, args, function(error){
    if(error) throw error;
    res.send({success:true});
  })
});

module.exports = router;