const express = require("express");
const env = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const AuthRouter = require("./router/auth");
const UserRouter = require("./router/users");

env.config();

mongoose.connect(
  "mongodb://localhost/Blog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to mogodb successfully");
  }
);

const app = express();

//middleware

app.use(express.json());
app.use(helmet());

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.get("/", (req, res) => {
  res.status(200).send("Rakshith");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server listeing to port number ${PORT}`);
});
