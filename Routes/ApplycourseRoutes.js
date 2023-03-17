const express = require("express");
const router = express.Router();

const multer = require("multer");
const {
  createAnswer,
  getStatistic,
  dailySurvey,
  createBulAnswer,
} = require("../Controler/AnswerControler");
const {
  ApplyCourse,
  getApplyNoti,
  approveCourse,
} = require("../Controler/ApplyCourseControler");
const {
  createCourse,
  getTeachers,
  getCourseByTeacher,
} = require("../Controler/CourseControler");
const { createQuestion } = require("../Controler/QuestionControler");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 1024,
  },
});

router.post("/apply", ApplyCourse);
router.get("/get", getApplyNoti);
router.post("/approve", approveCourse);
// router.put(
//   "/update/:id",
//   upload.fields([{ name: "avatar", maxCount: 1 }]),
//   updateUserDetails
// );
// router.delete("/delete/:id", upload.none(), deleteUser);

module.exports = router;
