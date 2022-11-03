import Todo from "../models/todoModel.js";

export const dashboardController = async (req, res, next) => {
  const { title, description, image } = req.body;
  console.log(title);
  const foundTitle = await Todo.findOne({ title });
  if (foundTitle) {
    return res
      .status(401)
      .json({ status: "failed", message: "Title is already there!!" });
    next();
  }

  const newTodo = new Todo(req.body);
  await newTodo.save();

  res.status(201).json(newTodo);
};
