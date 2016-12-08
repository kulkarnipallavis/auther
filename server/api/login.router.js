var router = require('express').Router();
var User = require('./users/user.model');

router.post('/login', function(req, res, next){
	console.log("%%%%%%%%%% in login");
	User.findOne({
			where : {
				email : req.body.email,
				password : req.body.password
			}
		})
	.then(function(userFound){
		 if (!userFound) res.sendStatus(401);
		 else{
		 	req.session.user = user;
		 	res.sendStatus(200);
		 }
	})
	.catch(next);
});

module.exports = router;