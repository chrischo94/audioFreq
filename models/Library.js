const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
    
}); 

const LibrarySchema = new Schema({
    name: {
        type: String,
        // unique: true
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