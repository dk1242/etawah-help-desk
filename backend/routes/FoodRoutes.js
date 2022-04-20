const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  foodreqById,
  read,
  remove,
  list,
} = require("../controllers/food");

router.param("userId", userById);
router.param("foodreqId", foodreqById);

router.get("/foodreq/:foodreqId", read);
router.post("/foodreq/create", create);
router.delete(
  "/foodreq/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/foodreqs/:userId", requireSignin, isAuth, isAdmin, list);

module.exports = router;
