const router = require("express").Router();
const libraryRoutes = require("./library");
const podCastRoutes = require("./podCastRoutes");
const userRoutes = require("./userRoutes");

// Library routes
router.use("/library", libraryRoutes);

// Podcast routes
router.use("/podcast", podCastRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;
