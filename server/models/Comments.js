const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  postID: {
    type:mongoose.Types.ObjectId,
    required: true,
    ref: "Post"  
  },
  comment: {
    type: String,
    required: true

  },



},
  { timestamps: true }
);
module.exports = mongoose.model("Comment", CommentSchema);