var express = require('express');
var router = express.Router();
var mysql = require('../app/database/mysql');

var id = 2;
add = function(data, callback){
  try {
    var boat = {
      _id: id,
      name: data.name,
      date: data.date,
      voyages: data.voyages,
      poidsTonnes: data.poidsTonnes
    };
    id++;
    boats.push(boat);
  } catch(err){
    console.log(err);
    return callback(false);
  }
  return callback(true);
};

deleteBoat = function(id, callback){
  for(var i=0, len=boats.length; i<len; i++){
    if(boats[i]._id == id){
      boats.splice(i, 1);
      return callback(undefined, true);
    }
  }
  return callback({msg: "unfound element"}, false);
}

router.get('/', function(req, res){
  mysql.connection(function(result){
    var query = 'SELECT * FROM owt_boats';
    mysql.select(query, function(result){
      res.send({success: true, boats: result});
    });
  });
})
.post('/', function(req, res){
  add(req.body, function(result){
    if(!result){
      res.send({success:false});
    } else {
      res.send({success: true});
    }
  });
})
.delete('/:boatId', function(req, res){
  deleteBoat(req.params.boatId, function(err, result){
    if(err){
      console.log("router.delete('/boats/:boatId'): " + err);
      res.send({success:false});
    }else{
      res.send({success:true});
    }
  });
});

module.exports = router;