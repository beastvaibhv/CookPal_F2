const burgerIcon = document.querySelector('.burger');
const linkContainer = document.querySelector('.link');

function onBurgerClicked() {
    let navBar = document.querySelector(".nav-container");
    if (navBar.className === "nav-container") {
      navBar.className += " responsive";
    } else {
      navBar.className = "nav-container";
    }
}

