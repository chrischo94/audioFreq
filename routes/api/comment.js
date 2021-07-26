const router = require("express").Router(); 
const CommentController = require("../../controllers/CommentController"); 

// api/comment
router
    .route("/")
    .get(CommentController.findAll)
    .post(CommentController.create); 

// api/comment/:id 
router
    .route("/:id")
    .get(CommentController.findById)
    .post(CommentController.create)
    .delete(CommentController.remove)


module.exports = router; 