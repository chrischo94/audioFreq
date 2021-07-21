const mongoose = require("mongoose");
const { Schema } = mongoose;
const PodcastSchema = new Schema({
    title: {
        type: String
    },
    publisher: {
        type: String
    },
    description: {
        type: String
    },
    listen_score_global_rank: {
        type: String
    },
    link: {
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