const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .8 + "px";

});