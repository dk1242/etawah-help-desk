const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  bedreqById,
  read,
  remove,
  list,
} = require("../controllers/beds");

router.param("userId", userById);
router.param("bedreqId", bedreqById);

router.get("/bedreq/:bedreqId", read);
router.post("/bedreq/create", create);
router.delete("/bedreq/delete/:userId", requireSignin, isAuth, isAdmin, remove);
router.get("/bedreqs/:userId", requireSignin, isAuth, isAdmin, list);

module.exports = router;
