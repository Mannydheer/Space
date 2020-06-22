const app = require("./index");

const PORT = process.env.PORT || 4000;

//connection to server.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});