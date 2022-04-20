const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  volunteerreqById,
  read,
  remove,
  list,
} = require("../controllers/volunteer");

router.param("userId", userById);
router.param("volunteerreqId", volunteerreqById);

router.get("/volunteerreq/:volunteerreqId", read);
router.post("/volunteerreq/create", create);
router.delete(
  "/volunteerreq/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/volunteerreqs/:userId", requireSignin, isAuth, isAdmin, list);

module.exports = router;
