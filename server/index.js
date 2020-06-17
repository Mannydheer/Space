const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("isomorphic-fetch");
require("dotenv").config();
const app = express();

//port.
const PORT = process.env.PORT || 4000;

//middleware.
app.use(bodyParser.json());

//endpoints.
//space statio
app.get("/api/current-iss-location", async function (req, res) {
  res.status(200).json("message");
});
//weather
// app.get("/api/currentWeatherDetails", async function (req, res) {
//   res.status(200).json(jsonApi);
// });

//connection to server.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
