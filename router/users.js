const router = require("express").Router();
const Auth = require("../models/Auth");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updateUser = await Auth.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(401).json("you can update onely your account");
  }
});

//deleteUser

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    const User = await Auth.findById(req.body.userId);

    await Post.deleteMany({ username: User.username });
    await Auth.findByIdAndDelete(req.body.userId);
    res.status(200).json("User Deleted successfully");
  } else {
    res.status(401).json("you can onely delete your account");
  }
});

//getUser

router.get("/:id", async (req, res) => {
  try {
    const User = await Auth.findById(req.params.id);
    const { password, ...others } = User._doc;
    res.status(200).json(others);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
