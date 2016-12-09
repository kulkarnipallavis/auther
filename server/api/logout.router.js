var router = require('express').Router();
var User = require('./users/user.model');

router.get('/logout', function(req, res, next){
	req.session.user = null;
  res.sendStatus(200);
});

module.exports = router;