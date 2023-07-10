window.addEventListener('load', function() {
  var form = document.getElementById('blogForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var formData = new FormData(form);
    // You can perform additional validation or processing of form data here
    displayBlogPost(formData);
    form.reset(); // Reset the form after submission
  });
});

function displayBlogPost(formData) {
  var postContainer = document.getElementById('postContainer');
  var title = formData.get('title');
  var content = formData.get('content');

  var newPost = document.createElement('div');
  newPost.className = 'post';
  newPost.innerHTML = '<h2>' + title + '</h2><p>' + content + '</p>';

  postContainer.appendChild(newPost);
}
