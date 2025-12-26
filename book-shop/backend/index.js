import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

// Teste de conexão
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL no Railway!");
});

app.get("/", (req, res) => {
  res.json("Backend OK 🚀");
});

app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("BACKEND RUNNING ON PORT", PORT);
});
