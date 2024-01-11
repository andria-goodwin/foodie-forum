// search bar functionality
function search() {
    var input, filter, foods, foodItems, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    foods = document.getElementsByClassName('food-item');

    // search each post for search matches via filter
    for (i = 0; i < foods.length; i++) {
        foodItems = foods[i];
        txtValue = foodItems.textContent || foodItems.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            foods[i].style.display = "";
        } else {
            // if there are no matches, display nothing
            foods[i].style.display = "none";
        }
    }
}