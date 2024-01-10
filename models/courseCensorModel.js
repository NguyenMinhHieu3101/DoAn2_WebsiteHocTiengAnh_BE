const mongoose = require("mongoose");
const courseCensorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add the course name"],
    },
    des: {
      type: String,
      required: [true, "Please add the description"],
    },
    image: {
      type: String,
      require: [true, "Please add the image"],
    },
    amount: {
      type: Number,
      require: [true, "Please add the number of candidates"],
    },
    level: {
      type: String,
      require: [true, "Please add the level"],
    },
    creatorname: {
      type: String,
      require: [true, "Please add the creator name"],
    },
    statusCourse: {
      type: String,
      require: [true, "Please add the status"],
    },
    approvername: {
      type: String,
      require: [true, "Please add the approver name"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("CourseCensor", courseCensorSchema);
