const express = require('express');
const router = express.Router();
const {getAllToDo,
       createToDo,
       deleteToDo
} 
= require("../controller/todoController");


router.get("/",getAllToDo)

router.post("/",createToDo)

router.delete("/:id",deleteToDo)

module.exports = router;