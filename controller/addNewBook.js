const addNewBook = (req, res, next)=>{
  console.log(req.body);
  console.log(req.params);
res.json({message: "Successfully added new book"})
// res.render("form")
}

module.exports = addNewBook