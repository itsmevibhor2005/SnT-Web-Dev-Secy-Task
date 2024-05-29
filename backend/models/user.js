const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required: true,
        index: true
    },
    userName:{
        unique:true,
        type:String,
        index: true,
        
    },
    password:{
        type:String,
        required: true
    },
    todo:[

        {
            type: mongoose.Types.ObjectId,
            ref: "Todo",
        }
    ] 
})

module.exports = mongoose.model("user", userSchema);