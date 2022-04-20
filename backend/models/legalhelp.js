const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const legalhelpReqSchema = new mongoose.Schema(
  {
    reqName: {
      type: String,
      default: "Legal Help Request",
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
    problem: {
      type: String,
    },
    address: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("LegalhelpReq", legalhelpReqSchema);
