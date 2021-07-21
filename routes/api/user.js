const router = require("express").Router();
const userController = require("../../controllers/UserController");
const passport = require("../../configs/passport");
// api/user/:id
router.route("/:id").get(userController.getUser);
// api/user/signup
router.route("/signup").post(userController.signup);
// api/user/login
router
  .route("/login")
  .post(passport.authenticate("local"), userController.login);

router.route("/logout").get(userController.logout);

module.exports = router;
