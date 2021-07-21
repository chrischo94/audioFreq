const router = require("express").Router();
const PodcastController = require("../../controllers/PodcastController");


    // api/podCast/ 
router
    .route("/")
    .get(PodcastController.findAll); 


module.exports = router;
