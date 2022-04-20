const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");
const BedReq = require("../models/BedReqDb");

exports.bedreqById = (req, res, next, id) => {
  BedReq.findById(id)
    .populate("user")
    .exec((err, bedreq) => {
      if (err || !bedreq) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.bedreq = bedreq;
      next();
    });
};

exports.read = (req, res) => {
  return res.json(req.bedreq);
};

exports.create = (req, res) => {
  let bedreq = new BedReq(req.body);
  bedreq.save((err, result) => {
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
  BedReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    BedReq.findOneAndDelete({ _id: req.body.id })
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
  BedReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "bedreq not found",
        });
      }
      res.send(data);
    });
};
