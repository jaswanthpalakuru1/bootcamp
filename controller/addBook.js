const addBookController = (req, res, next)=>{
  res.render("form", {newBookId: "1", newBookName: "3", newBookAuthor: "nn"})
}

module.exports = addBookController;