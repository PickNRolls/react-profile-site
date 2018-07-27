import profiles from './profiles';
var listOfAccounts = profiles.listOfAccounts;

class Post {
  constructor (collectionID, postID, postDate, content) {
    this.collection = collectionID;
    this.id = postID;
    this.postDate = postDate;
    this.content = content;
  }
}

// Action only through the PostsCollection class

class PostsCollection {
  constructor (userID) {
    this.userID = userID;
    this.posts = [];
    this.postsCount = 0;
  }

  addPost (content) {
    var post = new Post(this.userID, this.postsCount++, new Date(), content);
    this.posts.push(post);
  }
}

var collections = {
  _admin: new PostsCollection('_admin')
};


// Creating walls for users

listOfAccounts.forEach(function (account) {
  var id = account.id;
  collections[id] = new PostsCollection(id);
});

export default collections;
