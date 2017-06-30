var express = require('express');
var router = express.Router();

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

router.post('/auth', function(req, res) {
  console.log(req.body.user);
  res.send({success: true});
})
.get('/boats', function(req, res){
  res.send({success: true, boats: boats})
});

module.exports = router;