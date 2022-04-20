const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const animalHelpReqSchema = new mongoose.Schema(
  {
    reqName: {
      type: String,
      default: "Animal Help Request",
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    phoneNo: {
      type: Number,
      trim: true,
      required: true,
    },
    animal: {
      type: String,
    },
    problem: {
      type: String,
    },
    location: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("AnimalHelpReq", animalHelpReqSchema);
