const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  createPlasmaReq,
  createPlasmaDon,
  plasmareqById,
  plasmaDonById,
  readPlasmaReq,
  readPlasmaDon,
  removePlasmaReq,
  removePlasmaDon,
  listPlasmaReq,
  listPlasmaDon,
} = require("../controllers/plasma");

router.get("/plasmareq/:plasmareqId", readPlasmaReq);
router.get("/plasmadon/:plasmadonId", readPlasmaDon);
router.post("/plasmareq/create/:userId", requireSignin, isAuth, createPlasmaReq);
router.post("/plasmadon/create/:userId", requireSignin, isAuth, createPlasmaDon);
router.delete(
  "/plasmadon/delete/:plasmaDonId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  removePlasmaDon
);
router.delete(
  "/plasmareq/delete/:plasmareqId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  removePlasmaReq
);
router.get("/plasmareqs", listPlasmaReq);
router.get("/plasmadons", listPlasmaDon);

router.param("userId", userById);
router.param("plasmareqId", plasmareqById);
router.param("plasmadonId", plasmaDonById);

module.exports = router;
