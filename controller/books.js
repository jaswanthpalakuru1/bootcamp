const booksController = (req, res, next)=>{
  res.json({id: 1, name: "Harry Potter", author: "J.K. Rowling"})
}

module.exports = booksController;