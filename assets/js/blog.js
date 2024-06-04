// blog.js

document.addEventListener('DOMContentLoaded', function() {
  const postsContainer = document.getElementById('postsContainer');
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p><small>Posted by: ${post.username} on ${new Date(post.timestamp).toLocaleString()}</small></p>
    `;
    postsContainer.appendChild(postElement);
  });

  document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
});
