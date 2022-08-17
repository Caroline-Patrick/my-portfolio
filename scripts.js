const menu = document.querySelector(".menu"); // variable of unordered list
const menuItems = document.querySelectorAll(".nav-item"); //variable w/ all list items
const hamburger = document.querySelector(".hamburger"); // variable of hamburger button
const closeIcon= document.querySelector(".closeIcon"); // var of X/close icon
const menuIcon = document.querySelector("menuIcon"); // var of hamburger icon

const toggleMenu = () => {
    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.getElementsByClassName.display = "none";
        menuIcon.getElementsByClassName.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.getElementsByClassName.display = "block";
        menuIcon.getElementsByClassName.display= "none";
    }
    } // I added .showMenu as a selector in CSS. So this fxn says - if the UL already has 'showMenu' selector, then remove it (to hide the menu). And make the close Icon disappear and the menu icon appear.
    // otherwise, add "showMenu" to the class list of the UL to display menu. And take the close Icon and display it and hide menuIcon

    hamburger.addEventListener("click", toggleMenu); // call toggleMenu function when the hamburger button is clicked

    menuItems.forEach(
        function(menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )  // forEach loops through the array of menu items (list) and adds event listener that says to close menu (toggle menu) when it is clicked