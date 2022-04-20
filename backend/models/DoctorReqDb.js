const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const doctorReqSchema = new mongoose.Schema(
  {
    reqName: {
      type: String,
      default: "Doctor Request",
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
    symptoms: {
      type: String,
    },
    prescription: {
      data: Buffer,
      contentType: String,
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
module.exports = mongoose.model("DoctorReq", doctorReqSchema);
