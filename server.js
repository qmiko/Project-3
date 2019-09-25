const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const db = require('./models');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {

    cb(null, title)
  }
})

var upload = multer({storage:storage}).single('file');
app.post('/api/upload', function(req, res){
  console.log(req.file, " file uploaded");

  upload(req, res, function(err){
    if(err instanceof multer.MulterError){
      return res.status(500).json(err)
    }else if(err){
      return res.status(500).json(err)
    }
    console.log(req.file, " file uploaded");

    return res.status(200).send(req.file);
  })
});
app.use(routes)
// app.use(fs)
// Send every request to the React app
// Define any API routes before this runs
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})

