const express = require("express");
const path = require("path");

const app = express();

app.get("/sample-data", (req, res) => {
  res.json({
    test1: 1,
    test2: 2,
    test3: 3
  });
  console.log("data sent");
});

// Handles any requests that don't match the ones above
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/home.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`app listening on port ${port}`);
