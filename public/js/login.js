// front end login form handler
const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("anything");
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(email, password);
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/post');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // front end sign up form handler
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    // Send a POST request to the API endpoint
    if (name && email && password) {
      const response = await fetch('api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/post');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // Event listeners
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  