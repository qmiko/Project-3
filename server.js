const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const db = require('./models')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
// Send every request to the React app
// Define any API routes before this runs
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})

