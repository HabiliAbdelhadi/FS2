const Course = require("../models/Course");
const Chapter = require("../models/Chapter");

exports.listChapters = async (req, res) => {
  try {
    const data = await Chapter.find();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getChapter = async (req, res) => {
  try {
    const data = await Chapter.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Chapter introuvable" });
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.createChapter = async (req, res) => {
  try {
    const course = await Course.findById(req.body.course);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    const { title, description } = req.body;
    const files = req.files.map((file) => file.path);

    const newChapter = new Chapter({
      title,
      description,
      files,
      course: req.body.course,
    });
    await newChapter.save();

    res.json(newChapter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.deleteChapter = async (req, res) => {
  try {
    const data = await Chapter.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Chapter introuvable" });
    //the files are deleted in the pre remove function
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
