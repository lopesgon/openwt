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

exist = function(user){
  for(var i=0, len=users.length; i<len; i++){
    if(users[i].username == user.username && users[i].password == user.password){
      return true;
    }
  }
  return false;
};

deleteBoat = function(boat){
  for(var i=0, len=boats.length; i<len; i++){
    if(boats._id == boat._id){
      boats.splice(i, 1);
      return true;
    }
  }
  return false;
};

router.post('/auth', function(req, res) {
  if(!exist(req.body)){
    res.send({success: false});
  }
  res.send({success: true});
})
.get('/boats', function(req, res){
  res.send({success: true, boats: boats})
})
.post('/boats', function(req,res){
  var boat = req.body.boat;
  boats.add(boat);
})
.delete('/boats/:boatId', function(req, res){
  if(!deleteBoat(req.params.boatId)){
    res.send({success: false});
  }
  res.send({success: true});
});

module.exports = router;