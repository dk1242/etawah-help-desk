const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const PlasmaReqSchema = new mongoose.Schema(
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
module.exports = mongoose.model("PlasmaReq", PlasmaReqSchema);
