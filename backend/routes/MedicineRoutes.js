const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  medicinereqById,
  read,
  remove,
  list,
} = require("../controllers/medicine");

router.param("userId", userById);
router.param("medicinereqId", medicinereqById);

router.get("/medicinereq/:medicinereqId", read);
router.post("/medicinereq/create", create);
router.delete(
  "/medicinereq/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/medicinereqs/:userId", requireSignin, isAuth, isAdmin, list);

module.exports = router;
