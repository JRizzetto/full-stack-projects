const express = require("express");
const app = express();
const port = 3000;

const returning = {
  message: "Pong",
};

app.get("/ping", (req, res) => {
  res.json(returning);
});

app.listen(port, () => {
  console.log(`Server is reunning ${port}`);
});
