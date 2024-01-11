const submit = document.querySelector('#submit');
const deleteBtn = document.querySelector('#delete');

// front end food post handler
const postHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const restaurant = document.querySelector('#restaurant').value;
    const description = document.querySelector('#description').value;
    const star_rating = document.querySelector('#star-rating').value;
    
    // Send a POST request to the API endpoint
    if (name && restaurant && description && star_rating) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ name, restaurant, description, star_rating }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
  
      if (response.ok) {
        // if response ok, reload the page
        document.location.reload();
        alert('Post Created!');
      } else {
        alert(response.statusText);
      }
    }
};

// front end delete food post handler
const deletePost = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    // Send a DELETE request to the API endpoint
    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // if response ok, reload the page
      document.location.reload();
      alert('Deleted Post!');
    } else {
      alert('Failed to delete project');
    }
  }
};

// Event listeners
submit.addEventListener('click', postHandler);
deleteBtn.addEventListener('click', deletePost);