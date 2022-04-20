const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const BloodDonateSchema = new mongoose.Schema(
  {
    reqName: {
      type: String,
      default: "Blood Donate Request",
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
    bloodGrp: {
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
module.exports = mongoose.model("BllodDonate", BloodDonateSchema);
