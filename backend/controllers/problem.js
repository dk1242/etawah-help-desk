const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");
const ProblemReq = require("../models/animalHelpReqDb");

exports.problemreqById = (req, res, next, id) => {
  ProblemReq.findById(id)
    .populate("user")
    .exec((err, problemreq) => {
      if (err || !problemreq) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.problemreq = problemreq;
      next();
    });
};

exports.read = (req, res) => {
  return res.json(req.problemreq);
};

exports.create = (req, res) => {
  let problemreq = new ProblemReq(req.body);
  problemreq.save((err, result) => {
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
  ProblemReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    ProblemReq.findOneAndDelete({ _id: req.body.id })
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
  ProblemReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "problemreq not found",
        });
      }
      res.send(data);
    });
};
