const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

//port.
const PORT = process.env.PORT || 4000;

//middleware.
app.use(bodyParser.json());

//endpoints.
app.get("/api/currentISSLocation", function (req, res) {
  res.send("hello");
});

//connection to server.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
