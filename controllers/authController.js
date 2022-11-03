import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupController = async (req, res) => {
  //Search  my DB either user is already reistered
  const { email, username, password } = req.body;
  const foundUser = await User.findOne({ email });
  if (foundUser) {
    return res
      .status(401)
      .json({ status: "failed", message: "Email already registered!!" });
  }
  // Hashing the password before saving the user to the DB
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  req.body.password = hashedPassword;
  const user = new User(req.body);
  await user.save();

  //creating the jwt token
  const payload = {
    id: user._id,
    username: user.username,
  };

  jwt.sign(payload, "randomString", { expiresIn: "1h" }, (err, token) => {
    if (err) throw err;
    res.status(200).json({ token, msg: "OK" });
  });
  //res.status(201).json(user);
  //res.status(200).json({ status: "success", message: "User Registered!!!" });
};

export const signinController = async (req, res) => {
  const { email, password } = req.body;
  const currentUser = await User.findOne({ email });
  if (!currentUser)
    return res
      .status(400)
      .json({ status: "failed", message: "Invalid Crendetials!" });
  const verifiedUser = await bcrypt.compare(password, currentUser.password);
  if (!verifiedUser)
    return res
      .status(400)
      .json({ status: "failed", message: "Invalid Credentials!!" });
  res.status(200).json({
    status: "success",
    message: { email: verifiedUser.email, username: currentUser.username },
  });
};
