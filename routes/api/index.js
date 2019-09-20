const path = require("path");
const router = require("express").Router();
const itemRoutes = require("./item");

router.use("/items", itemRoutes);
// For anything else, render the html page
router.use(function(req, res) {
    console.log('/api hit, but no matches found. req sent to react')
 res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
module.exports = router;