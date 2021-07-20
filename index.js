const express = require("express");
const env = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const AuthRouter = require("./router/auth");
const UserRouter = require("./router/users");
const PostRouter = require("./router/post");
const CategoryRouter = require("./router/category");

env.config();
const app = express();
app.use("/images", express.static(path.join(__dirname, "/images")));

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//middleware

app.use(express.json());
app.use(helmet());

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/post", PostRouter);
app.use("/category", CategoryRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server listeing to port number ${PORT}`);
});
