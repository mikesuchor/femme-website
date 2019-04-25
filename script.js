$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        arrows: true,
        dots: true
    });
});

// When the user scrolls the page, execute checkSticky function
window.onscroll = function() {checkSticky()};

// Get the navbar
var navbar = document.getElementById("site-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function checkSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}