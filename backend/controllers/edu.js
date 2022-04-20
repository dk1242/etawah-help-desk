const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");
const EduReq = require("../models/EduHelp");

exports.edureqById = (req, res, next, id) => {
  EduReq.findById(id)
    .populate("user")
    .exec((err, foodreq) => {
      if (err || !foodreq) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.foodreq = foodreq;
      next();
    });
};

exports.read = (req, res) => {
  return res.json(req.foodreq);
};

exports.create = (req, res) => {
  let edureq = new EduReq(req.body);
  edureq.save((err, result) => {
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
  EduReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    EduReq.findOneAndDelete({ _id: req.body.id })
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
  EduReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "foodreq not found",
        });
      }
      res.send(data);
    });
};
