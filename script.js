window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function() {
    let nav = document.querySelector('nav');
    let navLinks = nav.querySelector('.nav-links');
    let hamburgerElement = nav.querySelector('.hamburger');
    hamburgerElement.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

