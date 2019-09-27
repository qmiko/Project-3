const db = require('../models');

module.exports = {
    create:function(req, res) {
        console.log('post req', req.body)
        db.Items.create(
           req.body
        ).then(
            function(item){
                // console.log(item);
                res.redirect('/');
            }
        ).catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Items
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};