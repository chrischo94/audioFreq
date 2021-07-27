const db = require("../models");

// Defining methods for the LibrarysController
module.exports = {
  findAll: function(req, res) {
    db.Library
      .find({username: req.session.username})
      .populate("podcasts")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Library
      .findById(req.params.id)
      .populate("podcasts")
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
    db.Library.findOneAndUpdate({username:req.session.username}, { $push: { podcasts: req.params.id } }, { new: true })
      .then(dbUser => {
        console.log(dbUser)
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Library
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
