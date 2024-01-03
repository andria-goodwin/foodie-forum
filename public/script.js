function search () { 
    var searchTerm = document.getElementById("searchInput").value; 
    document.getElementById("searchResults").innerHTML = "<p>Search Results: " + searchTerm + "</p>"
}