const express = require("express");
const app = express();

const PORT = 3334;

app.get("/", function (req, res) {
  res.send("bla bla bla!");
});

app.listen(PORT, () => {
  console.log("running..." + PORT);
});
