const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");
const BloodReq = require("../models/BloodReqDb");
const BloodDon = require("../models/BloodDonateDb");

exports.bloodreqById = (req, res, next, id) => {
  BloodReq.findById(id)
    .populate("user")
    .exec((err, bloodreq) => {
      if (err || !bloodreq) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.bloodreq = bloodreq;
      next();
    });
};

exports.bloodDonById = (req, res, next, id) => {
  BloodDon.findById(id)
    .populate("user")
    .exec((err, blooddon) => {
      if (err || !blooddon) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.blooddon = blooddon;
      next();
    });
};
exports.readBloodReq = (req, res) => {
  return res.json(req.bloodreq);
};

exports.readBloodDon = (req, res) => {
  return res.json(req.blooddon);
};
exports.createBloodReq = (req, res) => {
  let bloodreq = new BloodReq(req.body);
  bloodreq.save((err, result) => {
    if (err) {
      console.log("se", err);
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(result);
  });
};

exports.createBloodDon = (req, res) => {
  let blooddon = new BloodDon(req.body);
  blooddon.save((err, result) => {
    if (err) {
      console.log("se", err);
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(result);
  });
};
exports.removeBloodReq = (req, res) => {
  let request = {};
  BloodReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    BloodReq.findOneAndDelete({ _id: req.body.id })
      .then((deletedProduct) => {
        res.json({
          deletedProduct,
          message: "Request deleted successfully",
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

exports.removeBloodDon = (req, res) => {
  let request = {};
  BloodDon.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    BloodDon.findOneAndDelete({ _id: req.body.id })
      .then((deletedProduct) => {
        res.json({
          deletedProduct,
          message: "Request deleted successfully",
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
exports.listBloodReq = (req, res) => {
  BloodReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "bloodreq not found",
        });
      }
      res.send(data);
    });
};

exports.listBloodDon = (req, res) => {
  BloodDon.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "bloodreq not found",
        });
      }
      res.send(data);
    });
};
