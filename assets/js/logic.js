// logic.js

// Function to save a blog post to localStorage
function savePost(post) {
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  posts.push(post);
  localStorage.setItem('blogPosts', JSON.stringify(posts));
}

// Function to get all blog posts from localStorage
function getPosts() {
  return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

export { savePost, getPosts };
