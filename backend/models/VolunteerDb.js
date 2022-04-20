const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    whatsappNo: {
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
    medicineHelp: {
      type: String,
    },
    BloodHelp: {
      type: String,
    },
    rationHelp: {
      type: String,
    },
    foodHelp: {
      type: String,
    },
    oxygenHelp: {
      type: String,
    },
    moneyHelp: {
      type: String,
    },
    covidInFamily: {
      type: String,
    },
    otherHelps: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Volunteer", volunteerSchema);
