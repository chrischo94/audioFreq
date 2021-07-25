const mongoose = require("mongoose");
const { Schema } = mongoose;
const PodcastSchema = new Schema({
    title_original: {
        type: String
    },
    description_original: {
        type: String
    },
    image: {
        type: String
    },
    audio: {
        type: String
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
const Podcast = mongoose.model("Podcast", PodcastSchema);
module.exports = Podcast;