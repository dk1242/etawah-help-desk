const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  doctorreqById,
  read,
  remove,
  list,
} = require("../controllers/doctor");

router.get("/doctorreq/:doctorreqId", read);
router.post("/doctorreq/create", create);
router.delete(
  "/doctorreq/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/doctorreqs/:userId", requireSignin, isAuth, isAdmin, list);

router.param("userId", userById);
router.param("doctorreqId", doctorreqById);

module.exports = router;
