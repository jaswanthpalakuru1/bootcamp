const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  birthday: String,
});

userSchema.methods.birthdayCheck = function () {
  console.log("running ?");
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const todayDate = dd + "-" + mm + "-" + yyyy;
  return this.birthday === todayDate;
};


userSchema.statics.findByBirthday = function(birthday){
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const todayDate = dd + "-" + mm + "-" + yyyy;
  return this.where({birthday: new RegExp(todayDate,"i")})
}


userSchema.virtual('fullName').get(function(){
  return `${this.firstName} ${this.lastName}`
})


const User = mongoose.model("User", userSchema);
// User.methods.birthdayCheck = function(callback){
//   return mongoose.model("User").find({birthday: this.birthday}, callback)
// }
module.exports = User;
