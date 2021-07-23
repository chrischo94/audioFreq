const router = require("express").Router();
const userRoutes = require("../api/user");
const libraryRoutes = require("../api/library");
const podCastRoutes = require("../api/podCast");
const commentRoutes = require("../api/comment"); 

const isUserAuthenticated = require("../../middleware/isAuthenticated");

router.use("/users", userRoutes);
router.use("/library", libraryRoutes); 
router.use("/podCast", podCastRoutes); 
router.use("/comment", commentRoutes); 

router.get("/secret", isUserAuthenticated, (req, res) => {
  res.send("this is a secret!");
});

module.exports = router;