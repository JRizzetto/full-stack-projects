import express from "express";
import postRouts from "./routes/posts.js";
import userRouts from "./routes/users.js";
import authRouts from "./routes/auth.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  // Retorne o caminho COMPLETO
  const fullPath = `/upload/${file.filename}`;
  console.log("Upload retornando:", fullPath);
  res.status(200).json(fullPath); // ← Agora retorna "/upload/nome.jpg"
});

app.use("/api/auth", authRouts);
app.use("/api/users", userRouts);
app.use("/api/posts", postRouts);

app.listen(8800, () => {
  console.log("Connected port 8800");
});
