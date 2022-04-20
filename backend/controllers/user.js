const User = require("../models/UserModel");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.profile);
};

exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "not authorised or cant update now.",
        });
      }
      res.json(user);
    }
  );
};

exports.addReqToUserHistory = (req, res, next) => {
  let requests = [];
  req.body.requests.forEach((item) => {
    history.push({
      item,
    });
  });

  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: { requests: requests } },
    { new: true },
    (error, data) => {
      if (error) {
        return res.status(400).json({
          error: "could not update user requests history",
        });
      }
      next();
    }
  );
};
