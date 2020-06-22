import express, { Request, Response } from "express";
import bodyParser from "body-parser";
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());

import { getIssPosition } from "./controllers/spaceController";
//ENDPOINTS.
app.get("/api/current-iss-location", getIssPosition);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
