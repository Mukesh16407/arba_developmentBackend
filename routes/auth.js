const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updatePassword,
  updateProfile,
  logout,
} = require("../controllers/authController");
const upload = require("../multerConfig/storageConfig");

const { isAuthenticatedUser } = require("../middleWares/auth");

router.route("/register").post(upload.single("user_profile"), registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

module.exports = router;
