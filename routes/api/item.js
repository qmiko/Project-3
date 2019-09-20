const router = require("express").Router();
const db = require('../../models');
const itemController = require('../../controllers/itemController');

router.route("/")
    .get((req, res) => {
        console.log('/api/item was hit')
        db.Items.findAll({})
        .then(function(db){
            var obj = {
                item:db
            }
            return res.json(obj);
        })
    })
    .post(itemController.create);

module.exports = router;