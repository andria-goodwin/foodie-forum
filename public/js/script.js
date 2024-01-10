document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResultsContainer = document.getElementById('search-results');

    // searchButton.addEventListener('click', function() {
    //     const searchTerm = searchInput.value.trim().toLowerCase();
    //     if (searchTerm !== '') {
    //         const searchResults = performSearch(searchTerm);
    //         displaySearchResults(searchResults);
    //     } else {
    //         searchResultsContainer.innerHTML = 'Please enter keywords to search.';
    //     }
    // });

    function performSearch(searchTerm) {
        const searchableElements = document.querySelectorAll('p, h1, h2, h3, a');

        const results = [];

        searchableElements.forEach(element => {
            const content = element.textContent.toLowerCase();
            if (content.includes(searchTerm)) {
                results.push({
                    text: content,
                    element: element
                });
            }
        });

        return results;
    }

    function displaySearchResults(results) {
        const resultsHtml = results.map(result => {
            return `<p>Found in: ${result.text}</p>`;
        }).join('');

        searchResultsContainer.innerHTML = resultsHtml || 'No results found.';
    }
});