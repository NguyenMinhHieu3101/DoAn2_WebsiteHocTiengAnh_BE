const mongoose = require("mongoose");
const levelWordSchema = mongoose.Schema(
  {
    vocab: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("LevelWord", levelWordSchema);
