import Todo from "../models/todoModel.js";

export const createTodoList = async (req, res) => {
  const { title, description, image } = req.body;
  console.log(title);
  try {
    const foundTitle = await Todo.findOne({ title });
    if (foundTitle) {
      return res
        .status(401)
        .json({ status: "failed", message: "Title is already there!!" });
    }

    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    if (savedTodo) res.status(201).json({ status: "save" });
  } catch (err) {
    res.status(401).json({ status: "fail", message: err.message });
  }
};

export const getTodoList = (req, res) => {};
