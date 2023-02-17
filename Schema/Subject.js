const mongoose = require("mongoose");
const userdata = new mongoose.Schema(
  {
    subject: {
      type: String,
      require: true,
      trim: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    course: {
      type: String,
      require: true,
      unique: true,
    },
    price: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },

  { timestamps: true }
);
// userdata.index({ location: "2dsphere" });

// userdata.index({ location_1: "2dsphere" });
module.exports = new mongoose.model("course", userdata);
