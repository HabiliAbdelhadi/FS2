const Course = require("../models/Course");
const User = require("../models/User");
const fs = require("fs");

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
    const data = await Course.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Course introuvable" });
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    const data = await Course.findByIdAndDelete({ _id: req.params.id });
    if (!data) return res.status(404).json({ message: "Course introuvable" });
    fs.unlinkSync(data.thumbnail);
    console.log("slm");
    await Chapter.deleteMany({ course: data._id });
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.createCourse = async (req, res) => {
  try {
    const { title, description, type } = req.body;
    const thumbnail = req.file.path; // Access the thumbnail file path

    const newCourse = new Course({
      title,
      description,
      type,
      thumbnail,
    });
    await newCourse.save();

    res.json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Edit course details (including thumbnail)
exports.editCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { title, description, type } = req.body;

    // Find the course by ID
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the 'thumbnail' file is included in the request
    if (req.files && req.files.length > 0) {
      // Delete the old thumbnail before updating
      if (course.thumbnail) {
        fs.unlinkSync(course.thumbnail);
      }

      // Update the thumbnail field
      const thumbnail = req.files[0].path;
      course.thumbnail = thumbnail;
    }

    // Update the course fields
    course.title = title;
    course.description = description;
    course.type = type;

    // Save the updated course
    await course.save();

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
