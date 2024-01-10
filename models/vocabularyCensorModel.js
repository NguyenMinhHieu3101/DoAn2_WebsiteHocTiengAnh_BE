const mongoose = require("mongoose");
const vocabularyCensorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the vocabulary name"],
    },
    meaning: {
      type: String,
      required: [true, "Please add the meaning"],
    },
    image: {
      type: String,
      required: [true, "Please add the image"],
    },
    sound: {
      type: String,
      required: [true, "Please add the sound"],
    },
    topic: {
      type: String,
      required: [true, "Please add the topic"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("VocabularyCensor", vocabularyCensorSchema);
