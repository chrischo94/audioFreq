const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
    text: {
        type: String,
    },
});
const LibrarySchema = new Schema({
    name: {
        type: String,
    },
    podcasts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Podcast"
        }
    ]
});

const Library = mongoose.model("Library", LibrarySchema);
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Library;

// const Library = mongoose.model("Library", LibrarySchema);
// const Comment = mongoose.model("Comment”, CommentSchema);
// module.exports = {Library, Comment};