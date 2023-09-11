// bad ///////////////////////////
async function fetchArticlesForUser(userId) {
  // APIエンドポイントが変更された場合、関数全てのURLを変更しなければならない
  const response = await fetch(`/api/users/${userId}`, {
    credentials: "include",
    redirect: "follow",
  });
  const user = await response.json();
  const articleResponse = await fetch(`/api/articles/${user.authorId}`);
  return articleResponse.json();
}

async function fetchCommentsForUser(userId) {
  // 変更を忘れるかもしれない
  const response = await fetch(`/api/users/${userId}`, {
    credentials: "include",
    redirect: "follow",
  });
  const user = await response.json();
  const commentResponse = await fetch(`/api/comments/${user.commentId}`);
  return commentResponse.json();
}
////////////////////////////////////////////////////////////


async function fetchUsers(userId){
  const response = await fetch(`/api/users/${userId}`, {
    credentials: "include",
    redirect: "follow",
  });
  return await response.json()
}

async function fetchArticlesForUser(userId) {
  const user = fetchUsers(userId)
  const articleResponse = await fetch(`/api/articles/${user.authorId}`);
  return articleResponse.json();
}

async function fetchCommentsForUser(userId) {
  const user = fetchUsers(userId)
  const commentResponse = await fetch(`/api/comments/${user.commentId}`);
  return commentResponse.json();
}