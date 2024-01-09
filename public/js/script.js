const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function() {
    const query = searchInput.ariaValueMax;
    console.log('Searching for: ' + query);
});