require("dotenv").config();
const express = require("express");
const todoRoutes = require("./routes/todo")
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
// middlewares
app.use(cors())
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

// routes
app.use("/api/todo",todoRoutes)


// db connection
mongoose.connect(process.env.MONG_URl)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("db is connected and server is up and running in port",process.env.PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })