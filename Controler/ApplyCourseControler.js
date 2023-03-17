const { default: mongoose } = require("mongoose");
const Answers = require("../Schema/Answers");
const ApplyOnCourse = require("../Schema/ApplyOnCourse");
const Course = require("../Schema/Subject");
const VotorList = require("../Schema/VotorList");

const ApplyCourse = async (req, res) => {
  try {
    const upload = await ApplyOnCourse.create(req.body);
    res
      .status(200)
      .send({ success: true, data: upload, message: "Data uploaded" });
  } catch (error) {
    console.log(error);
  }
};

const getApplyNoti = async (req, res) => {
  try {
    const upload = await ApplyOnCourse.find({ ...req.query })
      .populate({ path: "course" })
      .populate({ path: "teacher" })
      .populate({ path: "user" });
    res
      .status(200)
      .send({ success: true, data: upload, message: "Data uploaded" });
  } catch (error) {
    console.log(error);
  }
};
const approveCourse = async (req, res) => {
  try {
    const upload = await ApplyOnCourse.findByIdAndUpdate(
      req.body.id,
      {
        isApproved: req.body.isApproved,
      },
      { new: true }
    );

    res
      .status(200)
      .send({ success: true, data: upload, message: "Data uploaded" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ApplyCourse, getApplyNoti, approveCourse };
