const express = require("express");
const multer = require("multer");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  toggleLiveEvent,
  updateEvent,
} = require("../controllers/event");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    // console.log("file", file);
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, Date.now() + "-" + fileName);
  },
});
const uploadImage = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
const { userById } = require("../controllers/user");

const router = express.Router();

router.post(
  "/event/addnew/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  addNewEvent
);
router.get("/events/all", getAllEvents);
router.delete(
  "/event/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  deleteEvent
);
router.put(
  "/event/toggle/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  toggleLiveEvent
);
router.put(
  "/event/update/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  updateEvent
);
router.param("userId", userById);

module.exports = router;
