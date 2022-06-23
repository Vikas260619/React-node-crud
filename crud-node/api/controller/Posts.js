const Posts = require("../models/posts");
var { ObjectID } = require("mongodb");

exports.create = (req, res) => {
  var posts = new Posts({
    title: req.body.title,
    description: req.body.description,
  });
  posts.save().then(
    (doc) => {
      res.status(200).send(doc);
    },
    (e) => {
      res.status(400).json({ success: false, message: e.message });
    }
  );
};

exports.getAllPosts = (req, res) => {
  Posts.find()
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch((e) => {
      res.staus(400).json({ success: false, message: e.message });
    });
};

exports.getPostById = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send("user not valid");
  }
  Posts.findById(id)
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch((e) => {
      res.staus(400).json({ success: false, message: e.message });
    });
};

exports.updatePostById = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Posts.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      description: req.body.description,
    },
    { new: true }
  )
    .then((post) => {
      if (!post) {
        return res.status(404).send();
      }
      res
        .status(200)
        .send({ message: "your data successfully updated...", post: post });
    })
    .catch((e) => {
      res.status(400).send({ message: e.message });
    });
};

exports.deletePostById = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Posts.findByIdAndRemove(id)
    .then((post) => {
      if (!post) {
        return res.status(404).send("data not found..");
      }
      res
        .status(200)
        .send({ message: "data deleted successfully....", post: post });
    })
    .catch((e) => {
      res.status(400).send({ message: e.message });
    });
};
