const Gallery = require("../models/GalleryDb");
const fs = require("fs");
const path = require("path");

exports.addNewImage = (req, res) => {
  //   req.file = upload.single("image");
  // if (req.file === undefined) return res.send("you must select a file.");
  // req.file = req.body.image;
  console.log("body", req.body);
  console.log("file", req.file);
  var img = fs.readFileSync(req.file.path);
  var encode_img = img.toString("base64");
  var final_img = {
    contentType: req.file.mimetype,
    data: Buffer.from(encode_img, "base64"),
  };
  const { caption, description } = req.body;

  const gallery = new Gallery({ caption: caption, description: description });

  if (req.file) gallery.image = final_img;

  gallery.save((err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Problem in saving new Image",
      });
    }
    res.status(200).json({
      msg: data,
    });
  });
};

exports.getAllImages = (req, res) => {
  Gallery.find({}, (err, data) => {
    if (err)
      return res.status(400).json({
        error: "could not find blogs",
      });
    res.status(200).json({
      msg: data,
    });
  });
};

exports.deleteImage = (req, res) => {
  Gallery.findOneAndDelete({ _id: req.body.id })
    .then((deletedImage) => {
      res.json({
        deletedImage,
        message: "Image deleted successfully",
      });
    })
    .catch((err) => {
      res.status(400).send({
        err,
      });
    });
};

exports.updateImage = (req, res) => {
  // console.log(req.body);
  const { caption, description } = req.body;
  // console.log(title, description, url);
  Gallery.findById(req.body.id, (err, photo) => {
    // console.log(event);
    if (photo) {
      if (caption) {
        photo.caption = caption;
      }
      if (description) {
        photo.description = description;
      }
      photo.save((err, data) => {
        if (err) {
          // console.log(err);
          return res.status(400).json({
            error: "Problem in updating this Image",
          });
        }
        // console.log(data);
        res.status(200).json({
          msg: data,
        });
      });
    } else {
      res.status(400).json({
        err: err,
      });
    }
  });
};
