const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
module.exports = Library;