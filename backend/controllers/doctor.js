const { errorHandler } = require("../helpers/dbErrorHandler");
const DoctorReq = require("../models/DoctorReqDb");

exports.doctorreqById = (req, res, next, id) => {
  DoctorReq.findById(id)
    .populate("user")
    .exec((err, doctorreq) => {
      if (err || !doctorreq) {
        return res.status(400).json({
          msg: "Request not found",
        });
      }
      req.doctorreq = doctorreq;
      next();
    });
};

exports.read = (req, res) => {
  return res.json(req.doctorreq);
};

exports.create = (req, res) => {
  let doctorreq = new DoctorReq(req.body);
  doctorreq.save((err, result) => {
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
  DoctorReq.find().exec((data) => {
    request = data;
  });
  console.log(request);
  if (request) {
    DoctorReq.findOneAndDelete({ _id: req.body.id })
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

exports.list = (req, res) => {
  DoctorReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "doctorreq not found",
        });
      }
      res.send(data);
    });
};
