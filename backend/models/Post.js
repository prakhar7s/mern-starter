const mongoose = require("mongoose");

const Post = mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Post", Post);
