const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  legalreqById,
  read,
  remove,
  list,
} = require("../controllers/legal");

router.param("userId", userById);
router.param("legalreqId", legalreqById);

router.get("/legalreq/:legalreqId", read);
router.post("/legalreq/create", create);
router.delete(
  "/legalreq/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/legalreqs/:userId", requireSignin, isAuth, isAdmin, list);

module.exports = router;
