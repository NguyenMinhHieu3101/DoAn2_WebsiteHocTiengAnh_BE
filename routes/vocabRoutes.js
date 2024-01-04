const express = require("express");
const {
  getVocab,
  getLevelWords,
} = require("../controllers/vocabularyController");

const router = express.Router();

router.post("/getVocab", getVocab);
router.get("/getLevelWords", getLevelWords);

module.exports = router;
