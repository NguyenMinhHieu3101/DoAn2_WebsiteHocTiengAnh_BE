const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const getManagers = asyncHandler(async (req, res) => {
  const user = await User.find({ role: "manager" });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
const deleteManager = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = {
  getManagers,
  deleteManager,
};
