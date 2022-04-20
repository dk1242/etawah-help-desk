const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  oxygenreqById,
  read,
  remove,
  list,
} = require("../controllers/oxygen");

router.param("userId", userById);
router.param("oxygenreqId", oxygenreqById);

router.get("/oxygenreq/:oxygenreqId", read);
router.post("/oxygenreq/create", create);
router.delete(
  "/oxygenreq/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/oxygenreqs/:userId", requireSignin, isAuth, isAdmin, list);

module.exports = router;
