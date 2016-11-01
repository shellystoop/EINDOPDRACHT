var menu = document.querySelector("#menu");
var dropwdown = document.querySelector("#dropdownmenu");

var toggle = function (event) {
    dropdown.classList.toggle("open")
}

menu.addEventListener("click", toggle);