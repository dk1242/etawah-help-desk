const Event = require("../models/EventsDb");
const fs = require("fs");
const path = require("path");

exports.addNewEvent = (req, res) => {
  //   req.file = upload.single("image");
  // if (req.file === undefined) return res.send("you must select a file.");
  // req.file = req.body.image;
  console.log("body", req.body);
  console.log("file", req.file);

  var poster = fs.readFileSync(req.file.path);
  var encode_poster = poster.toString("base64");
  var final_poster = {
    contentType: req.file.mimetype,
    data: Buffer.from(encode_poster, "base64"),
  };
  const { title, description, url } = req.body;

  const event = new Event({
    title: title,
    description: description,
    url: url,
  });

  if (req.file) event.poster = final_poster;

  event.save((err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Problem in saving new Event",
      });
    }
    res.status(200).json({
      msg: data,
    });
  });
};

exports.getAllEvents = (req, res) => {
  Event.find({}, (err, data) => {
    if (err)
      return res.status(400).json({
        error: "could not find events",
      });
    res.status(200).json({
      msg: data,
    });
  });
};

exports.deleteEvent = (req, res) => {
  Event.findOneAndDelete({ _id: req.body.id })
    .then((deletedEvent) => {
      res.json({
        deletedEvent,
        message: "Event deleted successfully",
      });
    })
    .catch((err) => {
      res.status(400).send({
        err,
      });
    });
};
exports.toggleLiveEvent = (req, res) => {
  console.log(req.body);
  Event.findById(req.body.id, (err, event) => {
    console.log(event);
    if (event) {
      event.live = !event.live;
      event.save((err, data) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: "Problem in toggling this Event",
          });
        }
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
exports.updateEvent = (req, res) => {
  // console.log(req.body);
  const { title, description, url } = req.body;
  // console.log(title, description, url);
  Event.findById(req.body.id, (err, event) => {
    // console.log(event);
    if (event) {
      if (title) {
        event.title = title;
      }
      if (description) {
        event.description = description;
      }
      if (url) {
        event.url = url;
      }
      event.save((err, data) => {
        if (err) {
          // console.log(err);
          return res.status(400).json({
            error: "Problem in updating this Event",
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
