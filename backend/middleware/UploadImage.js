const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    // console.log("file1", file);
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, Date.now() + fileName);
    // console.log("file2", file);
  },
});

module.exports = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log("yes");
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
