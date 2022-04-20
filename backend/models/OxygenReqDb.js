const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const oxygenReqSchema = new mongoose.Schema(
  {
    reqName: {
      type: String,
      default: "Oxygen Request",
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
    quantity: {
      type: Number,
    },
    cylinder: {
      type: String,
    },
    address: {
      type: String,
    },
    prescription: {
      data: Buffer,
      contentType: String,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("OxygenReq", oxygenReqSchema);
