var express = require('express');
var router = express.Router();

var users = [
  {
    username: 'fred',
    password: 'secret'
  }
];

var boats = [
  {
    _id: 0,
    name: "Nébuleuse",
    date: 2017,
    voyages: 0,
    poidsTonnes: 20000
  },
  {
    _id: 1,
    name: "Titanic",
    date: 1907,
    voyages: 1,
    poidsTonnes: 52310
  }
];

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

exist = function(user, callback){
  for(var i=0, len=users.length; i<len; i++){
    if(users[i].username == user.username && users[i].password == user.password){
      return callback(true);
    }
  }
  return callback(false);
};

deleteBoat = function(boat, callback){
  for(var i=0, len=boats.length; i<len; i++){
    if(boats._id === boat._id){
      boats.splice(i, 1);
      return callback(true);
    }
  }
  return callback(false);
};

router.post('/auth', function(req, res) {
  exist(req.body, function(result){
    if(!result){
      res.send({success: false});
    }else{
      res.send({success: true});
    }
  });
})
.get('/boats', function(req, res){
  res.send({success: true, boats: boats})
})
.post('/boats', function(req, res){
  add(req.body, function(result){
    if(!result){
      res.send({success:false});
    } else {
      res.send({success: true});
    }
  });
})
.delete('/boats/:boatId', function(req, res){
  deleteBoat(req.params.boatId, function(result){
    console.log(result);
    if(!result){
      res.send({success:false});
    }else{
      res.send({success:true});
    }
  });
});

module.exports = router;