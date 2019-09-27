const router = require("express").Router();
const db = require('../../models');
const path = require("path");
//add filter
router.route("/:name")
    .get((req, res) => {
        console.log('trying to send file:', __dirname + "/../../uploads/"+req.params.name + ".jpg")
        res.sendFile(path.resolve(__dirname + "/../../uploads/"+req.params.name + ".jpg"));
    })

module.exports = router;