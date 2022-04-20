const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = async (req, res) => {
  const { name, phoneNo, password } = req.body;
  try {
    let user = await User.findOne({ phoneNo });
    if (user) {
      return res.status(400).json({ msg: "user already exists" });
    }

    user = new User({
      name,
      phoneNo,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(
      payload,
      "randomString",
      {
        expiresIn: 10000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
        });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Saving");
  }
};

exports.signin = async (req, res) => {
  console.log(req.body);
  let { phoneNo, password } = req.body;
  try {
    let user = await User.findOne({ phoneNo: phoneNo });
    if (!user) {
      return res.status(400).json({
        message: "User not exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect Password !",
      });
    }
    const payload = {
      user: {
        id: user._id,
      },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie("t", token, { expire: new Date() + 9999 });

    return res.json({
      token,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ msg: "Signout successfully" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth.user.id;
  if (!user) {
    return res.status(403).json({
      message: "Forbidden access",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      message: "Forbidden access",
    });
  }
  next();
};
