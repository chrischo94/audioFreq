const db = require("../models"); 

// Defining methods for the CommentController
module.exports = {
    findAll: function(req, res) {
      db.Comment
        .find({username: req.session.username})
        .populate("podcasts")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Comment
        .findById(req.params.id)
        .populate("podcasts")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log(req.body)
      db.Podcast.findOneAndUpdate({username:req.session.username}, { $push: { comments: _id } }, { new: true })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
    },
    update: function(req, res) {
      db.Comment.findOneAndUpdate({_id:req.params.id}, { $push: { podcasts: _id } }, { new: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Comment
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  