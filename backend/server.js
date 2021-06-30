const express = require("express");
const postRoutes = require("./routes/post");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://new_user:7890@cluster0.2k3tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
