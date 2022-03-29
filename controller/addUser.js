const User = require("../schema/index")
async function addUser(req, res, next){
  try {
  console.log(req.body);
  const user = await User.find({firstName: req.body.firstName});
  console.log(user);
  if(user.length === 0){
    const newUser = new User({firstName: req.body.firstName, lastName : req.body.lastName, birthday: req.body.birthday});
    // console.log(newUser);
    const birthday = newUser.birthdayCheck();
    await newUser.save();
    res.json({user: newUser, birthday: birthday }) 
  }
  else{
res.json({message: "User already exist"}) 
  }
  } catch (error) {
    next(error)
  }
  
}

module.exports = addUser