const router = require("express").Router();
const itemController = require('../../controllers/itemController');
//add filter
router.route("/")
.get(itemController.findAll)
.post(itemController.create);

module.exports = router;