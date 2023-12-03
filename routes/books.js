const express = require("express");
const Book = require("../book.js");
const router = express.Router();

router.get('/',(req,res)=>{
    obj = {
        a: "vken",
        number: 45
    }
    res.json(obj)
})