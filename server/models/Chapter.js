const mongoose = require("mongoose");

const chapterSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the chapter title"],
  },
  description: {
    type: String,
    required: [true, "Please enter the chapter description"],
  },
  files: {
    type: [String],
    default: [],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
