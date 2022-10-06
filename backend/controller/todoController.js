const todoModel = require("../models/todoModel")
const mongoose = require('mongoose');


const getAllToDo = async(req,res)=>{
    const toDo = await todoModel.find({});
    res.status(200).json(toDo)
}

const createToDo = async(req,res)=>{
    const {todo} = req.body;
    console.log(todo);
    try{
        const toDo = await todoModel.create({todo});
        res.status(200).json(todo)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}


const deleteToDo =  async(req,res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such list"})
    }
    const toDo = await todoModel.findByIdAndDelete({_id:id});
    !toDo ? res.status(404).json({error:"no such list"}) : res.status(200).json({toDo})
}
module.exports = {
    getAllToDo,
    createToDo,
    deleteToDo
}