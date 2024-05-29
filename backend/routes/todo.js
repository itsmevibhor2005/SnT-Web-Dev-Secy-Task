const router = require("express").Router();
const Todo = require("../models/todo");
const User = require("../models/user");
//Create
router.post("/addTask", async (req, res) => {
  try {
    const { title, desc, id } = req.body;
    const existingUser = await User.findById(id);

    if (existingUser) {
      const todo = new Todo({ title, desc, user: existingUser });
      await todo.save().then(() => res.status(200).json({ todo }));
      existingUser.todo.push(todo);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

//Update
router.put("/edit/:id", async (req, res) => {
  try {
    const { title, desc, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const todo = await Todo.findByIdAndUpdate(req.params.id, { title, desc });
      todo.save().then(() => res.status(200).json({ message: "Task Updated" }));
    }
  } catch (error) {
    console.log(error);
  }
});

//delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findByIdAndUpdate(
      id,
      { $pull: { todo: req.params.id } }
    );

    if (existingUser) {
      const todo = await Todo.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Task Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

//getTask
router.get("/getTodo/:id", async (req, res) => {
    try{

        const todo = await Todo.find({ user: req.params.id }).sort({createdAt: -1});
        if(todo.length !==0){

            res.status(200).json({ todo });
        }
        else{
            res.status(400).json({message: "No Todos"})
        }
    }catch(error){
        res.status(400).json({message: "Failed to load todos"})
    }
});

module.exports = router;
