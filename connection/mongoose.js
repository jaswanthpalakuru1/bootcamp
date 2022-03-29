const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bootcamp:bootcamp@cluster0.31vyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", ()=>{
  console.info("Connected to db")
})