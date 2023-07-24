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

chapterSchema.pre("delete", async function (next) {
  try {
    // Loop through the files and delete them
    for (const file of this.files) {
      fs.unlinkSync(file);
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
