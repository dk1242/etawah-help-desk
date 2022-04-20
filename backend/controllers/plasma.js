const { errorHandler } = require("../helpers/dbErrorHandler");
const PlasmaReq = require("../models/PlasmaReqDb");
const PlasmaDon = require("../models/PlasmaDonateDb");

exports.plasmareqById = (req, res, next, id) => {
  PlasmaReq.findById(id)
    .populate("user")
    .exec((err, plasmareq) => {
      if (err || !plasmareq) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.plasmareq = plasmareq;
      next();
    });
};

exports.plasmaDonById = (req, res, next, id) => {
  PlasmaDon.findById(id)
    .populate("user")
    .exec((err, plasmadon) => {
      if (err || !plasmadon) {
        return res.status(400).json({
          msg: "product not found",
        });
      }
      req.plasmadon = plasmadon;
      next();
    });
};
exports.readPlasmaReq = (req, res) => {
  return res.json(req.plasmareq);
};

exports.readPlasmaDon = (req, res) => {
  return res.json(req.plasmadon);
};
exports.createPlasmaReq = (req, res) => {
  req.body.user = req.profile;
  let plasmareq = new PlasmaReq(req.body);
  plasmareq.save((err, result) => {
    if (err) {
      console.log("se", err);
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(result);
  });
};

exports.createPlasmaDon = (req, res) => {
  req.body.user = req.profile;
  let plasmadon = new PlasmaDon(req.body);
  plasmadon.save((err, result) => {
    if (err) {
      console.log("se", err);
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(result);
  });
};
exports.removePlasmaReq = (req, res) => {
  let request = PlasmaReq.find().exec((data) => {
    return data;
  });
  console.log(request);
  if (request) {
    PlasmaReq.findOneAndDelete({ _id: req.body.id })
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

exports.removePlasmaDon = (req, res) => {
  let request = PlasmaDon.find().exec((data) => {
    return data;
  });
  console.log(request);
  if (request) {
    PlasmaDon.findOneAndDelete({ _id: req.body.id })
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
exports.listPlasmaReq = (req, res) => {
  PlasmaReq.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "plasmareq not found",
        });
      }
      res.send({
        PlasmaReqs: data,
      });
    });
};

exports.listPlasmaDon = (req, res) => {
  PlasmaDon.find()
    .populate("user")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          err: "plasmareq not found",
        });
      }
      res.send({
        PlasmaDons: data,
      });
    });
};
