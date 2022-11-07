import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: { type: String, required: [true, "A todo list must have an title"] },
  description: {
    type: String,
    required: [true, "A todo list must have an description"],
    trim: true,
    lowercase: true,
  },
  image: { type: String },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
