const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const eduhelpReqSchema = new mongoose.Schema(
  {
    reqName: {
      type: String,
      default: "Edu help Request",
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
    highestEdu: {
      type: String,
    },
    preparation: {
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
module.exports = mongoose.model("EduhelpReq", eduhelpReqSchema);
