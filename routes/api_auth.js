var express = require('express');
var router = express.Router();

router.get('/auth', function(req, res, next) {
  res.send({res: false, desc: "TODO"});
});

module.exports = router;