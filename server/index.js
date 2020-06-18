const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("isomorphic-fetch");
require("dotenv").config();
const app = express();

//port.

//middleware.
app.use(bodyParser.json());

//endpoints.
//space statio
app.get("/api/current-iss-location", async function (req, res) {
  res.status(200).json("space");
});
app.get("/api/current-weather-details", async function (req, res) {
  res.status(200).json("weather");
});

module.exports = app;