const express = require("express");
const router = express.Router();

const {
  create,
  remove,
  read,
  update,
  list,
} = require("../controllers/product");

const { isAuthenticatedUser } = require("../middleWares/auth");

// routes
router.route("/product").post(isAuthenticatedUser, create);
router.route("/category/:slug").get(read);
router.route("products").post(list);
router.route("/product/:slug").put(isAuthenticatedUser, update);
router.route("/product/:slug").delete(isAuthenticatedUser, remove);

module.exports = router;
