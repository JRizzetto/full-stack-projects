const express = require("express");
const router = express.Router();
const { Likes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");



router.post("/", validateToken, async (req, res) => {
  const { PostId } = req.body;
  const UserId = req.user.id;

  // Debug para evitar crashes
  if (!PostId) {
    return res.status(400).json({ error: "PostId is missing" });
  }

  const found = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });

  if (!found) {
    await Likes.create({ PostId: PostId, UserId: UserId });
    return res.json("Liked the post");
  } else {
    await Likes.destroy({
      where: { PostId: PostId, UserId: UserId },
    });
    return res.json("Unliked the post");
  }
});

module.exports = router;
