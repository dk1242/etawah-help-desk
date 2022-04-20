const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  createBloodReq,
  createBloodDon,
  bloodreqById,
  bloodDonById,
  readBloodReq,
  readBloodDon,
  removeBloodReq,
  removeBloodDon,
  listBloodReq,
  listBloodDon,
} = require("../controllers/blood");

router.get("/bloodreq/:bloodreqId", readBloodReq);
router.get("/blooddon/:bloodDonId", readBloodDon);
router.post("/bloodreq/create", createBloodReq);
router.post("/blooddon/create", createBloodDon);
router.delete(
  "/blooddon/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  removeBloodDon
);
router.delete(
  "/bloodreq/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  removeBloodReq
);
router.get("/bloodreqs/:userId", requireSignin, isAuth, isAdmin, listBloodReq);
router.get("/blooddons/:userId", requireSignin, isAuth, isAdmin, listBloodDon);

router.param("userId", userById);
router.param("bloodreqId", bloodreqById);
router.param("bloodDonId", bloodDonById);

module.exports = router;
