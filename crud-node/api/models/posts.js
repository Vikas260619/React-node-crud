const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model("Posts", PostSchema);
module.exports = Posts;
