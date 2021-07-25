const router = require("express").Router();
const Post = require("../models/Post");

// create post
router.post("/", async (req, res) => {
  try {
    const newpost = new Post({
      title: req.body.title,
      desc: req.body.desc,
      photo: req.body.photo,
      username: req.body.username,
      category: req.body.category,
    });

    const post = await newpost.save();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

//get posts

router.get("/", async (req, res) => {
  const username = req.query.username;
  const catName = req.query.catName;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
      res.status(200).json(posts);
    } else if (catName) {
      //working with array in to diffrent ways
      // posts = await Post.find({ category:catName});
      posts = await Post.find({ category: { $in: [catName] } });
      res.status(200).json(posts);
    } else {
      posts = await Post.find({});
      res.status(200).json(posts);
    }
  } catch (error) {
    console.log(error);
  }
});

//get post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

// update post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.username === post.username) {
      try {
        const updatepost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatepost);
      } catch (error) {
        console.log(error);
      }
    } else {
      res.status(401).json("you can update only your post");
    }
  } catch (error) {
    console.log(error);
  }
});

// delete post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.username === post.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("post deleted successfully");
      } catch (error) {
        console.log(error);
      }
    } else {
      res.status(401).json("you can onely delete your post");
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
