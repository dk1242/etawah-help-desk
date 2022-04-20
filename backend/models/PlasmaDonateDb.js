const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const PlasmaDonateSchema = new mongoose.Schema(
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
    phoneNo: {
      type: Number,
      trim: true,
      required: true,
    },
    bloodGrp: {
      type: String,
    },
    antigenTest: {
      type: String,
    },
    days: {
      type: Number,
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
module.exports = mongoose.model("PlasmaDonate", PlasmaDonateSchema);
