const Course = require("../models/courseModel");
const Chapter = require("../models/chapterModel");

exports.createChapter = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const { title, description } = req.body;
    const files = req.files.map((file) => file.path);

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const newChapter = new Chapter({
      title,
      description,
      files,
      course: courseId,
    });
    await newChapter.save();

    res.json(newChapter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
