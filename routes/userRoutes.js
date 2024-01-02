const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
  changeInfo,
  getUserCourse,
  saveUserCourse,
  getContinueCourses,
  changePassword,
  getHistoryCourses,
  saveHistoryCourses,
  getManagers,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);
router.put("/changeInfo", changeInfo);
router.put("/changePassword", changePassword);
router.get("/getUsersCourses", getUserCourse);
router.post("/saveUserCourse", saveUserCourse);
router.get("/getContinueCourses", getContinueCourses);
router.get("/getManagers", getManagers);

router.post("/saveHistoryCourse", saveHistoryCourses);
router.get("/getHistoryCourses", getHistoryCourses);
module.exports = router;
