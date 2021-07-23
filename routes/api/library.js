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
<<<<<<< HEAD
    
    // for the comment post route / comment method we need a Corresponding controller method for it. 
    
    // .post(LibraryController.comment);
=======
 
>>>>>>> d84522be81d47d49dfd3540cde72d961bc8cae94


module.exports = router; 