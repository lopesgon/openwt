var express = require('express');
var router = express.Router();
var config = require('../config/database').config;
var mysql = require('mysql');
var pool = mysql.createPool(config);

var getBoat = function(id, callback){
  var query = "SELECT * FROM owt_boats WHERE boat_id = ?"
  pool.query(query, [id], function(error, result){
    if(error) throw error;
    return callback(result);
  });
};

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
    getBoat(results.insertId, function(result){
      res.send({success:true, boat: result});
    });
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