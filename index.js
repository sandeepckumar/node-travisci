const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).json("Hello world from Travis");
});

module.exports = app.listen(port, () =>
  console.log(`You app is running on port ${port}`)
);
