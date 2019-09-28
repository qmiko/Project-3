const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('./passport');
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const cors = require('cors');
const multer = require('multer');

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())


// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {

    cb(null, req.params.name)
  }
})

var upload = multer({storage:storage}).single('file');
app.post('/api/upload/:name', function(req, res){
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
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

