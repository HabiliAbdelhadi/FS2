const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the course name"],
  },
  description: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["default", "corp"],
    required: [true, "Please enter a course type: default or corp"],
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
