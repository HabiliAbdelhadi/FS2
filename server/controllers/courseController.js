const Course = require("../models/Course");
const User = require("../models/User");
const fs = require("fs");
const Chapter = require("../models/Chapter");

exports.listCourse = async (req, res) => {
  try {
    const data = await Course.find();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getCourse = async (req, res) => {
  try {
    const featured = req.query.featured || false;
    const data = await Course.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Course introuvable" });
    res.json(data);
    console.log(req.query.featured);
    if (featured) {
      data = data.where("featured", featured);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    const data = await Course.findByIdAndDelete({ _id: req.params.id });
    if (!data) return res.status(404).json({ message: "Course introuvable" });
    fs.unlinkSync(data.thumbnail);
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.createCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const thumbnail = req.file.path; // Access the thumbnail file path

    const newCourse = new Course({
      title,
      description,
      thumbnail,
    });
    await newCourse.save();

    res.json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Edit course (but not the chapters??) yes?
exports.editCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    // Find the course by ID
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the 'thumbnail' file is included in the request
    if (req.file) {
      fs.unlinkSync(course.thumbnail);
      course.thumbnail = req.file.path;
    }
    if (req.body.title) course.title = req.body.title;
    if (req.body.description) course.description = req.body.description;
    if (req.body.type) course.type = req.body.type;

    await course.save();

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
