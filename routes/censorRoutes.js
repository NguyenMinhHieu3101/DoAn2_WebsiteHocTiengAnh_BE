const express = require("express");
const {
  createCourse,
  getCourses,
  getVocabularyCensors,
  addVocabToCensor,
  saveCourseApprove,
  saveVocabularyApprove,
} = require("../controllers/censorController");
const router = express.Router();

router.post("/createCourse", createCourse);
router.get("/getCourseCensors", getCourses);
router.get("/getVocabularyCensors", getVocabularyCensors);
router.post("/addVocabularyCensors", addVocabToCensor);
router.post("/saveCourseApprove", saveCourseApprove);
router.post("/saveVocabularyApprove", saveVocabularyApprove);

module.exports = router;
