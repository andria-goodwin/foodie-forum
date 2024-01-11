// front end logout form handler
const logout = async () => {
  // Send a POST request to the API endpoint
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // if response ok, redirect to home page of website
      document.location.replace('/');
      alert('Successfully logged out. See you next time!');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  