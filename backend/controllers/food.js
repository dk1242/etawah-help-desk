const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");
const FoodReq = require("../models/FoodReqDb");

exports.foodreqById = (req, res, next, id) => {
  FoodReq.findById(id)
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
  let foodreq = new FoodReq(req.body);
  foodreq.save((err, result) => {
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
  FoodReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    FoodReq.findOneAndDelete({ _id: req.body.id })
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
  FoodReq.find()
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
