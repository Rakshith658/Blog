const router = require("express").Router();
const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    // generateing the password useing bcrypt
    const slat = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, slat);

    const newUser = new Auth({
      username: req.body.username,
      email: req.body.email,
      password: hashpassword,
    });

    const User = await newUser.save();
    const { password, ...others } = User._doc;
    res.status(200).json(others);
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await Auth.findOne({ email: req.body.email });
    !user && res.status(404).json("the user is not found");

    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validpassword && res.status(404).json("the password doesn't matchs");

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
