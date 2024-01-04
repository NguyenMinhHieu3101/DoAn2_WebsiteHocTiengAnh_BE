const User = require("../models/userModel");
const path = require("path");
const vocabularyModel = require("../models/vocabularyModel");
const LevelWord = require("../models/levelWordModel");

//@desc GetVocabulary
//@route POST/api/users/current
//@access private
const getVocab = async (req, res) => {
  const topic = req.body.topic;
  const vocab = await vocabularyModel.find({ topic });
  res.json(vocab);
  return vocab;
};

const getLevelWords = async (req, res) => {
  const levelWords = await LevelWord.find();
  res.json(levelWords);
  return levelWords;
};
module.exports = { getVocab, getLevelWords };
