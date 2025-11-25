import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET } from "../config.js";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const exist = await User.findOne({ email });
  if (exist) return res.status(409).json({ message: "Email already exists" });

  const hashPass = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashPass });
  await user.save();

  res.json({ message: "Account Created Successfully" });
});

// Signin
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid Password" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET);
  res.json({
    message: "Login Successful",
    token,
    user: { name: user.name, email },
  });
});

export default router;
