const submit = document.querySelector('#submit');
const deleteBtn = document.querySelector('#delete');

const postHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const restaurant = document.querySelector('#restaurant').value;
    const description = document.querySelector('#description').value;
    const star_rating = document.querySelector('#star-rating').value;
    
  
    if (name && restaurant && description && star_rating) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ name, restaurant, description, star_rating }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
  
      if (response.ok) {
        document.location.reload();
        alert('Post Created!');
      } else {
        alert(response.statusText);
      }
    }
  };

  const deletePost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
        alert('Deleted Post!');
      } else {
        alert('Failed to delete project');
      }
    }
  }

  submit.addEventListener('click', postHandler);
  deleteBtn.addEventListener('click', deletePost);