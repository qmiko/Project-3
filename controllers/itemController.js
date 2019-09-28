const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Items.find(req.query)
          .then(dbItems => res.json(dbItems))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Items.findById(req.params.id)
          .then(dbItems => res.json(dbItems))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Items.create(req.body)
          .then(dbItems => res.json(dbItems))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Items.findOneAndUpdate({ id: req.params.id }, req.body)
          .then(dbItems => res.json(dbItems))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Items.findById(req.params.id)
          .then(dbItems => dbItems.remove())
          .then(dbItems => res.json(dbItems))
          .catch(err => res.status(422).json(err));
      }
};