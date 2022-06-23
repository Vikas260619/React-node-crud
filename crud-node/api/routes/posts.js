module.exports = (app) => {
  const Posts = require("../controller/Posts");

  app.post("/posts", Posts.create);
  app.get("/posts", Posts.getAllPosts);
  app.get("/posts/:id", Posts.getPostById);
  app.patch("/posts/:id", Posts.updatePostById);
  app.delete("/posts/:id", Posts.deletePostById);
};
