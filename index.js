const connectToMongo = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

connectToMongo();

// Define your router
app.use("/api/books", require("./routes/bookRouter"));


app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
