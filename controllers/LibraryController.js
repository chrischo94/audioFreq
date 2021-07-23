const db = require("../models");

// Defining methods for the LibrarysController
module.exports = {
  findAll: function(req, res) {
    db.Library
      .find(req.query)
      .sort({ name: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Library
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Library
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Library
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Library
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // comment: function(req, res) {
  //   db.Comment.create(body)
  //   .then(({ _id }) => db.Podcast.findOneAndUpdate({_id:req.params.id}, { $push: { comments: _id } }, { new: true }))
  //   .then(dbUser => {
  //     res.json(dbUser);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });
  // }
};
