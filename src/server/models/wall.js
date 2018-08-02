var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wallSchema = new Schema({
  _id: String,
  posts: {
    type: Array,
    default: []
  },
  postsCount: {
    type: Number,
    default: 0
  }
});

var postSchema = new Schema({
  _id: String,
  userId: String,
  postDate: {
    type: Date,
    default: Date.now()
  },
  content: Object
});

var Post = mongoose.model('Post', postSchema);

wallSchema.methods.addPost = function (content) {
  var post = new Post({
    _id: this.postsCount++,
    userId: this._id,
    content: content
  });

  this.posts.push(post);
  return this.save();
};

var Wall = mongoose.model('Wall', wallSchema);

module.exports = Wall;
