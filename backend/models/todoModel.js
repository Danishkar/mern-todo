const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports =  mongoose.model("todo",toDoSchema)