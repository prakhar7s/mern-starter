const express = require("express");
const postRoutes = require("./routes/post");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected");
  }
);

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use("/post", postRoutes);

app.get("/", (req, resp) => {
  resp.send("Hello");
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
