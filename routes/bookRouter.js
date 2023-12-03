const express = require("express");
const Book = require("../Book");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, authors, publisher, genre, summary } = req.body;
    const book = new Book({
      title,
      authors,
      publisher,
      genre,
      summary,
    });
    await book.save();
    res.status(200).json({book});
  } catch (error) {
    console.error(error);
    res.status(500).send("some error");
  }
});
router.put('/:id', async (req, res) => {
  try {
    const { title, authors, publisher, genre, summary } = req.body;
    let book = await Book.findById(req.params.id);
    if(title) book.title = title;
    if(authors) book.authors= authors;
    if(publisher) book.publisher=publisher;
    if(genre)  book.genre=genre;
    if(summary)  book.summary=summary;

    await book.save();
   
    res.status(200).json({ book });
  } catch (error) {
    console.error(error);
    res.status(500).send("some error");
  }
});

module.exports = router;