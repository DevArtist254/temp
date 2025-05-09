const express = require("express");
const User = require("../model/User");
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

module.exports = router;
