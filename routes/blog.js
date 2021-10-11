const express = require("express");

const path = require("path");

const router = express.Router();

const blogs = require("../data/blogs");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});

router.get("/blogs", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/blogs.html"));
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    e.slug = req.params.slug;
  });
  console.log(myBlog);
  res.sendFile(path.join(__dirname, "../templates/blogpage.html"));
});

module.exports = router;
