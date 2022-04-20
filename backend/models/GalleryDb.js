const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  caption: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: { data: Buffer, contentType: String },
});
module.exports = mongoose.model("Gallery", GallerySchema);
