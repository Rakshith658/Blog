const express = require("express");
const env = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const AuthRouter = require("./router/auth");

env.config();

mongoose.connect(
  "mongodb://localhost/Blog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to mogodb successfully");
  }
);

const app = express();

app.use("/auth", AuthRouter);
app.get("/", (req, res) => {
  res.status(200).send("Rakshith");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server listeing to port number ${PORT}`);
});
