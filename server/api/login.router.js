var router = require('express').Router();
var User = require('./users/user.model');

router.post('/', function(req, res, next){
	console.log("%%%%%%%%%% in login");
	User.findOne({
			where : {
				email : req.body.email,
				password : req.body.password
			}
		})
	.then(function(userFound){
		if (!userFound) res.sendStatus(401);
		else {
			req.session.user = userFound;
			res.status(200).send(userFound);
		}
	})
	.catch(next);
});

module.exports = router;