const postHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value;
    const restaurant = document.querySelector('#restaurant').value;
    const description = document.querySelector('#description').value;
    const starRating = document.querySelector('#star-rating').value;
    
  
    if (name && restaurant && description && starRating) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ name, restaurant, description, starRating }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
  
      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert(response.statusText);
      }
    }
  };