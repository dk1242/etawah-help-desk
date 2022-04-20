const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");
const MedicineReq = require("../models/MedicineReqDb");

exports.medicinereqById = (req, res, next, id) => {
  MedicineReq.findById(id)
    .populate("user")
    .exec((err, medicinereq) => {
      if (err || !medicinereq) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.medicinereq = medicinereq;
      next();
    });
};

exports.read = (req, res) => {
  return res.json(req.medicinereq);
};

exports.create = (req, res) => {
  let medicinereq = new MedicineReq(req.body);
  medicinereq.save((err, result) => {
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
  MedicineReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    MedicineReq.findOneAndDelete({ _id: req.body.id })
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
  MedicineReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "medicinereq not found",
        });
      }
      res.send(data);
    });
};
