import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* =======================
   Middlewares
======================= */
app.use(express.json());
app.use(cors());

/* =======================
   Database Connection
======================= */
const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL no Railway!");
});

/* =======================
   Routes
======================= */

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Backend OK 🚀" });
});

// GET - List books
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.json(data);
  });
});

/* =======================
   Server
======================= */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("BACKEND RUNNING ON PORT", PORT);
});
