const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bedReqSchema = new mongoose.Schema(
  {
    reqName: {
      type: String,
      default: "Bed Request",
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
    healthIssue: {
      type: String,
    },
    oxygen: {
      type: String,
    },
    ventilator: {
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
module.exports = mongoose.model("BedReq", bedReqSchema);
