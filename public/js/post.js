const submit = document.querySelector('#submit');

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
        document.location.replace('/post');
        alert('Post Created!');
      } else {
        alert(response.statusText);
      }
    }
  };

  submit.addEventListener('click', postHandler)