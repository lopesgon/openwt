var express = require('express');
var router = express.Router();

router.post('/auth', function(req, res) {
  res.send({res: false, desc: "TODO"});
});

module.exports = router;