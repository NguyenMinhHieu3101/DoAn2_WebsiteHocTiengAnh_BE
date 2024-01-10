const courseModel = require("../models/courseCensorModel");
const courseApproveModel = require("../models/courseModel");
const vocabModel = require("../models/vocabularyCensorModel");
const vocabApproveModel = require("../models/vocabularyModel");

const createCourse = async (req, res) => {
  const { name, des, image, amount, level, creatorname } = req.body;
  const course = await courseModel.create({
    name,
    des,
    image,
    amount,
    level,
    creatorname,
    statusCourse: "Pending",
    approvername: "",
  });
  if (course) {
    res.status(200).json(course);
  }
};

const getCourses = async (req, res) => {
  const courses = await courseModel.find();
  res.json(courses);
  return courses;
};
const getVocabularyCensors = async (req, res) => {
  const courses = await vocabModel.find();
  res.json(courses);
  return courses;
};
const addVocabToCensor = async (req, res) => {
  try {
    const vocabList = req.body;

    const createdVocabs = await Promise.all(
      vocabList.map(async (vocabItem) => {
        const { topic, sound, image, name, meaning } = vocabItem;
        console.log(topic, sound, image, name, meaning);

        // Assuming vocabModel.create returns a Promise
        const vocab = await vocabModel.create({
          topic,
          sound,
          image,
          name,
          meaning,
        });

        return vocab;
      })
    );

    res.status(200).json(createdVocabs);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const saveCourseApprove = async (req, res) => {
  const courseFind = await courseModel.findOne({
    name: req.body.topicName,
  });

  console.log(req.body);
  const course = await courseApproveModel.create({
    name: courseFind.name,
    des: courseFind.des,
    image: courseFind.image,
    amount: 0,
    level: courseFind.level,
  });

  const updatecourse = await courseModel.findOneAndUpdate(
    { name: req.body.topicName },
    {
      $set: {
        statusCourse: "Approved",
        approvername: req.body.author,
      },
    }
  );
  if (course) {
    res.status(200).json(course);
  }
};
const saveVocabularyApprove = async (req, res) => {
  console.log("Thêm được từ rồi nè. ", req.body.topicName, "hihihi");
  const vocabSave = await vocabModel.find({
    topic: req.body.topicName,
  });
  console.log(vocabSave);
  const vocabApprove = await vocabApproveModel.create(
    vocabSave.map((item) => ({
      topic: req.body.topicName,
      sound: item.sound,
      image: item.image,
      name: item.name,
      meaning: item.meaning,
    }))
  );
  const vocabDelete = await vocabModel.deleteMany({
    topic: req.body.topicName,
  });
};
module.exports = {
  createCourse,
  getCourses,
  getVocabularyCensors,
  addVocabToCensor,
  saveCourseApprove,
  saveVocabularyApprove,
};
