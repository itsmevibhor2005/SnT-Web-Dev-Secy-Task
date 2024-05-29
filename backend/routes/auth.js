const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs")

//SignUP
router.post("/signUp", async(req, res)=>{
    try{
        const {email, userName, password} = req.body;
        const bcryptpass = bcrypt.hashSync(password)
        const user = new User({email, userName, password: bcryptpass})
        await user.save().then(()=>res.status(200).json({message: "SignUp successful"}));
        
    } catch(error){
        res.status(200).json({message: "User already exists"})
    }
});

//SignIN
router.post("/signIn", async(req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user){
            res.status(200).json({message: "Please SignUP first"})
        }
        const pass = bcrypt.compareSync(req.body.password, user.password)

        if(!pass){
            res.status(200).json({message: "Password is Incorrect"})
        }

        const{password, ...others}= user._doc
        res.status(200).json(others)
    }
    catch(error){

    }
})

module.exports = router;