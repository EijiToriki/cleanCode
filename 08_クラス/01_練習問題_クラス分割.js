// bad 
// class Blog {
//   addPost(post) {}
//   deletePost(id) {}
//   editPost(id, post) {}
//   addComment(id, comment) {}
//   deleteComment(id, commentId) {}
//   editComment(id, commentId, comment) {}
// }

// good
class Comment {
  add(id, comment) {}
  delete(id, commentId) {}
  edit(id, commentId, comment) {}
}

class Post {
  constructor(comments){
    this.comments = comments
  }
  add(post) {}
  delete(id) {}
  edit(id, post) {}
}

const comment = new Comment
const comments = [ comment ]
const post = new Post(comments)