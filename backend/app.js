const express = require("express");
const bodyParser = require("body-parser");
const logger = require('morgan');
const Post = require('./models/post');

const app = express();



app.use(logger('dev'));
app.use(bodyParser.json());

app.post('/api/posts', (req, res, next) => {
    console.log("AAAAAAAAAAAAAAAAAAAAA");
    const post = new Post({
        title : req.body.title,
        content : req.body.content
    });
    console.log(post);
    res.status(201).json(post);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/posts", (req, res, next) => {
  console.log("BBBBBBBBBBBBBBBBBB");
  const posts  = [
    {
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ];
  res.status(200).json({
    message: "Posts fetched succesfully!",
    posts: posts
  });
});

module.exports = app;
