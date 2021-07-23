const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
    text: {
        type: String,
    },
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;

// Add Chris method for Comment. We cant export both Library and Comment in the same models