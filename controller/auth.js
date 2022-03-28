const authControler = (req, res, next)=>{
  res.render("auth", {username: "Username", password: "Password"})
  }

module.exports = authControler;