const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const problemsSchema = new mongoose.Schema(
  {
    reqName: {
      type: String,
      default: "General Request",
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    phoneNo: {
      type: Number,
      trim: true,
      required: true,
    },
    address: {
      type: String,
    },
    problem: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ProblemReq", problemsSchema);
