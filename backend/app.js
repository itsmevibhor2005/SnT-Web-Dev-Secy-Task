const express = require("express")
const auth = require("./routes/auth.js")
const todo = require("./routes/todo.js")
const cors = require("cors");
const app = express()
require("./connections/conn.js")
app.use(express.json())
app.use(cors())
app.get("/", (req, res)=>{

    res.send("Hello")
})

app.use("/api/v1", auth);
app.use("/api/v2/", todo);



app.listen(3000, ()=>{
    console.log("Server Started")
})