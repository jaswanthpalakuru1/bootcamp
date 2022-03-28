const express = require("express");
const router = express.Router();
const booksController = require("../controller/books")
const addBookController = require("../controller/addBook")
const addNewBookController = require("../controller/addNewBook")

router.get("/", booksController);
router.get("/add", addBookController)
router.post("/addNewBook/:bookId/:bookName/:bookAuthor", addNewBookController)

module.exports = router;