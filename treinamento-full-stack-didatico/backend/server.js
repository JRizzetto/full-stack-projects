const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = [];

app.get("/ping", (req, res) => {
  res.json({
    message: "Pong",
  });
});

app.post("/api/message", (req, res) => {
  const { name, email, message } = req.body;
  returnMessage = { name, email, message };

  console.log(req.body);
  db.push(returnMessage);
  res.status(201).json({ ok: true, data: returnMessage });
});

app.get("/api/message", (req, res) => {
  res.json(db);
});

app.listen(3000, () => {
  console.log(`Server is reunning 3000`);
});
