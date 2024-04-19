const express = require("express");

const router = express.Router();

//controller
const {
  create,
  read,
  update,
  remove,
  list,
} = require("../controllers/category");

//middleware
const { isAuthenticatedUser } = require("../middleWares/auth");

router.route("/category").post(isAuthenticatedUser, create);
router.route("/categories").get(list);
router.route("/category/:slug").get(read);
router.route("/category/:slug").put(isAuthenticatedUser, update);
router.route("/category/:slug", list).delete(isAuthenticatedUser, remove);

module.exports = router;
