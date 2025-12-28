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

// POST - Create book
app.post("/books", (req, res) => {
  const { title, desc, price, cover } = req.body;

  if (!title || !desc || !price || !cover) {
    return res.status(400).json("Todos os campos são obrigatórios");
  }

  const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";

  const values = [title, desc, price, cover];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "Livro criado com sucesso 📚",
      id: data.insertId,
    });
  });
});

// DELETE - Remove book
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [bookId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    res.json({ message: "Livro removido com sucesso 🗑️" });
  });
});

// PUT - Update book
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const { title, desc, price, cover } = req.body;

  const q = `
    UPDATE books 
    SET title = ?, \`desc\` = ?, price = ?, cover = ?
    WHERE id = ?
  `;

  const values = [title, desc, price, cover, bookId];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    res.json({ message: "Livro atualizado com sucesso ✏️" });
  });
});

/* =======================
   Server
======================= */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("BACKEND RUNNING ON PORT", PORT);
});
