const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    user:[

      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ] 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
