import express from "express";
import postRouts from "./routes/posts.js";
import userRouts from "./routes/users.js";
import authRouts from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouts);
app.use("/api/users", userRouts);
app.use("/api/posts", postRouts);

app.listen(8800, () => {
  console.log("Connected port 8800");
});
