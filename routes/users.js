var express = require('express');
var router = express.Router();
const addUser = require("../controller/addUser");
const User = require("../schema/index")
// const findByBirthdayStaticMethod = require()

/* GET users listing. */
router.post('/addUser', addUser);
router.post("/findUser", async (req,res, next)=>{
try {
	console.log(req.body);
	const user = await User.findByBirthday(req.body.birthday)
	if(!user){
		res.json({message: "No one is having birthdays today"})
	}
	else{
		res.send(user)
	}
} catch (error) {
	next(error)
}
})

router.post("/fullName",async (req, res, next)=>{
try {
	const user = await User.findOne({firstName: req.body.firstName})
	console.log(user)
const fullName =await user.fullName;
	res.send({user: user, fullName: fullName})
} catch (error) {
	next(error)
}
});
// router.get("/birthdayCheck", birthdayCheck);

router.get('/info', function(req, res, next) {
	res.status(200).json({data: "Welcome to Freight Deck!!"})
});

module.exports = router;
