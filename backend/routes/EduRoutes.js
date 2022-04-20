const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  edureqById,
  read,
  remove,
  list,
} = require("../controllers/edu");

router.param("userId", userById);
router.param("edureqId", edureqById);

router.get("/edureq/:edureqId", read);
router.post("/edureq/create", create);
router.delete("/edureq/delete/:userId", requireSignin, isAuth, isAdmin, remove);
router.get("/edureqs/:userId", requireSignin, isAuth, isAdmin, list);

module.exports = router;
