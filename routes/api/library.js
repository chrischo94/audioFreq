const router = require("express").Router();
const LibraryController = require("../../controllers/LibraryController");

// api/library
router
    .route("/")
    .get(LibraryController.findAll)
    .post(LibraryController.create); 
    
// api/library/:id
router
    .route("/:id")
    .get(LibraryController.findById)
    .put(LibraryController.update)
    .delete(LibraryController.remove)
    
    // for the comment post route / comment method we need a Corresponding controller method for it. 
    
    // .post(LibraryController.comment);


module.exports = router; 