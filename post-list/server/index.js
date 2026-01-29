const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://full-stack-post-list.vercel.app",
    ],
    credentials: true,
  }),
);

const db = require("./models");

app.use("/posts", require("./routes/Posts"));
app.use("/comments", require("./routes/Comments"));
app.use("/auth", require("./routes/Users"));
app.use("/likes", require(".//routes/Likes"));

const PORT = process.env.PORT || 3001;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connected");
    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB error:", err);
  });
