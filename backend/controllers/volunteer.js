const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");
const VolunteerReq = require("../models/VolunteerDb");

exports.volunteerreqById = (req, res, next, id) => {
  VolunteerReq.findById(id)
    .populate("user")
    .exec((err, volunteerreq) => {
      if (err || !volunteerreq) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.volunteerreq = volunteerreq;
      next();
    });
};

exports.read = (req, res) => {
  return res.json(req.volunteerreq);
};

exports.create = (req, res) => {
  let volunteerreq = new VolunteerReq(req.body);
  volunteerreq.save((err, result) => {
    if (err) {
      console.log("se", err);
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(result);
  });
};

exports.remove = (req, res) => {
  let request = {};
  VolunteerReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    VolunteerReq.findOneAndDelete({ _id: req.body.id })
      .then((deletedProduct) => {
        res.json({
          deletedProduct,
          message: "Product deleted successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          err,
        });
      });
  } else {
    res.status(400).send({
      err: "Request not exist",
    });
  }
};

exports.list = (req, res) => {
  VolunteerReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "volunteerreq not found",
        });
      }
      res.send(data);
    });
};
