const mongoose = require("mongoose");
const userdata = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);
// userdata.index({ location: "2dsphere" });

// userdata.index({ location_1: "2dsphere" });
module.exports = new mongoose.model("applycourse", userdata);
