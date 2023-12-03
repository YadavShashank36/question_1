const connectToMongo = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

// Remove this line if "Book" is not being used
const Book = require("./book.js");

// Define your router
const router = express.Router();

router.get('/GET/api/books', async (req, res) => {
    try {
        const notes = await Book.find({});
        res.json(notes);
      } catch (error) {
        console.log(error.message);
        res.status(500).send("some error");
      }
});

// Tell the app to use your router for routes starting with '/'
app.use('/GET/api/books', router);

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
