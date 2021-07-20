const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
  }
});

const Podcast = mongoose.model("Podcast", PodcastSchema);

module.exports = Podcast;