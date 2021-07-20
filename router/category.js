const router = require("express").Router();
const Category = require("../models/Category");

// Create Category

router.post("/", async (req, res) => {
  try {
    const newCat = new Category(req.body);
    const savecat = await newCat.save();
    res.status(200).json(savecat);
  } catch (error) {
    console.log(error);
  }
});

// get Category

router.get("/", async (req, res) => {
  try {
    const cat = await Category.find();
    res.status(200).json(cat);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
