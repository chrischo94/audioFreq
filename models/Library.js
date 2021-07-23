const mongoose = require("mongoose");
const { Schema } = mongoose;


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
module.exports = Library;

