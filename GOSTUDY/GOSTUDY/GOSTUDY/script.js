function toggleMenu() {
    var bodyelement = document.getElementById("body-frame");
    bodyelement.classList.toggle("body-active")
    var menuelement = document.getElementById("menu-frame");
    menuelement.classList.toggle("menu-active")
    var menuelement = document.getElementById("menu-button");
    menuelement.classList.toggle("menu-button-active")
}