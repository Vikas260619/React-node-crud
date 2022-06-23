const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { db } = require("./config/db");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to  node");
});

require("./api/routes/posts")(app);

app.listen(8080, () => {
  console.log("server runing on port ", 8080);
});

module.exports = { app };
