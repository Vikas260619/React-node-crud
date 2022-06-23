var mongoose = require("mongoose");

var url = "mongodb://localhost:27017/crud";

var db = mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, res) {
    try {
      console.log("Connected to Database");
    } catch (err) {
      throw err;
    }
  }
);

module.exports.db = db;
