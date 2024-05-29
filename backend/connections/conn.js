const mongoose = require("mongoose")

const conn = async (req, res)=>{
try {
    await mongoose.connect("mongodb://localhost:27017/TodoApp").then(()=>{
        console.log("Connected");
        

    })
} catch (error) {
    res.status(400).json({
        message: "Not Connected"
    })
}

    
}

conn()