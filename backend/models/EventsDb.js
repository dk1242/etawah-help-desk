const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  poster: { data: Buffer, contentType: String },
  url: {
    type: String,
  },
  live: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("Event", EventSchema);
