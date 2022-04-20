const express = require("express");
const multer = require("multer");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    console.log("file", file);
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
const {
  addNewImage,
  getAllImages,
  deleteImage,
  updateImage,
} = require("../controllers/gallery");
const { userById } = require("../controllers/user");

const router = express.Router();

router.post(
  "/gallery/addnew/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  uploadImage.single("image"),
  addNewImage
);
router.get("/gallery/all", getAllImages);
router.delete(
  "/gallery/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  deleteImage
);
router.put(
  "/gallery/update/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  updateImage
);

router.param("userId", userById);

module.exports = router;
