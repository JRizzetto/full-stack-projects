import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date`, p.uid FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      console.log("Database error:", err);
      return res.status(500).json(err);
    }

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwttoken", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    console.log("Dados recebidos no addPost:", req.body);
    console.log("User Info:", userInfo);

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)";

    // CORRIJA AQUI: Inclua date E uid
    const values = [
      req.body.title,
      req.body.desc,
      req.body.img || "", // default vazio se não tiver imagem
      req.body.cat,
      req.body.date || new Date(), // Pega do frontend ou usa data atual
      userInfo.id, // ← AQUI ESTÁ FALTANDO!
    ];

    console.log("Valores para INSERT:", values);

    db.query(q, [values], (err, data) => {
      if (err) {
        console.error("ERRO MySQL no addPost:", err);
        console.error("SQL Message:", err.sqlMessage);
        console.error("SQL:", err.sql);
        return res.status(500).json({
          error: "Database error",
          details: err.sqlMessage,
        });
      }
      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwttoken", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("you can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwttoken", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id` = ? AND `uid` = ?";

    // REMOVA req.body.date daqui - não está no SET
    const values = [
      req.body.title,
      req.body.desc,
      req.body.img || "",
      req.body.cat,
    ];

    console.log("Valores para UPDATE:", [...values, postId, userInfo.id]);

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) {
        console.error("ERRO MySQL no updatePost:", err);
        return res.status(500).json(err);
      }
      return res.json("Post has been updated.");
    });
  });
};
