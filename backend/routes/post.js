const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.get("/", async (req, resp) => {
  const posts = await Post.find();
  resp.send(posts);
});

router.post("/new/:id", async (req, resp) => {
  const post = await new Post({
    name: req.body.name,
    id: req.params.id,
  }).save();
  resp.redirect("/");
});

module.exports = router;
