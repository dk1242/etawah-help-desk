const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  problemreqById,
  read,
  remove,
  list,
} = require("../controllers/problem");

router.param("userId", userById);
router.param("problemreqId", problemreqById);

router.get("/problemreq/:problemreqId", read);
router.post("/problemreq/create", create);
router.delete(
  "/problemreq/delete/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/problemreqs/:userId", requireSignin, isAuth, isAdmin, list);

module.exports = router;
