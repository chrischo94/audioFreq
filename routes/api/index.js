const router = require("express").Router();
const userRoutes = require("../api/user");
const libraryRoutes = require("../api/library");
const podCastRoutes = require("../api/podCast");

const isUserAuthenticated = require("../../middleware/isAuthenticated");

router.use("/users", userRoutes);
router.use("/library", libraryRoutes); 
router.use("/podCast", podCastRoutes); 

router.get("/secret", isUserAuthenticated, (req, res) => {
  res.send("this is a secret!");
});

module.exports = router;