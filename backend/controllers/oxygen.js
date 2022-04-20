const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");
const OxygenReq = require("../models/OxygenReqDb");

exports.oxygenreqById = (req, res, next, id) => {
  OxygenReq.findById(id)
    .populate("user")
    .exec((err, oxygenreq) => {
      if (err || !oxygenreq) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.oxygenreq = oxygenreq;
      next();
    });
};

exports.read = (req, res) => {
  return res.json(req.oxygenreq);
};

exports.create = (req, res) => {
  let oxygenreq = new OxygenReq(req.body);
  oxygenreq.save((err, result) => {
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
  OxygenReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    console.log(request);
    OxygenReq.findOneAndDelete({ _id: req.body.id })
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
  OxygenReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "oxygenreq not found",
        });
      }
      res.send(data);
    });
};
