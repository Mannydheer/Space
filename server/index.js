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
app.get("/api/currentISSLocation", async function (req, res) {
  let apiResponse = await fetch("http://api.open-notify.org/iss-now.json");
  let jsonApi = await apiResponse.json();
  res.status(500).json(jsonApi);
});

//connection to server.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
