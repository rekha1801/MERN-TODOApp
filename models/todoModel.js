import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  image: { type: String },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
