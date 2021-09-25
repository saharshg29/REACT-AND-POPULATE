var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var userRoute = require('./routes/user_routes');

var app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//USER ROUTE
app.use("/api", userRoute);



//DATA_BASE COLLECTION
mongoose.connect("mongodb://localhost/TASK-3")
  .then(() => console.log("MongoDB connected sucessfully"))
  .catch(err => console.error(err))

//PORT CONNECTION
//PORT CONNECTION
var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listining to port ${port}`);
});

module.exports = app;