window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function() {
    let nav = document.querySelector('nav');
    let navLinks = nav.querySelector('.navliens');
    let hamburgerElement = nav.querySelector('.hamburger');
    hamburgerElement.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

function lightMode() {
   let element = document.body;
   element.classList.toggle("lightmode"); 
   // applique ou retire la classe "lightmode" au body

   let bouton = document.getElementById("darklight");
    if (bouton.innerHTML === "Light") {
        bouton.innerHTML = "Dark";
        bouton.style.backgroundColor = "#333"
        bouton.style.color = "white";
    } else {
        bouton.innerHTML = "Light";
        bouton.style.backgroundColor = "white"
        bouton.style.color = "black";
    }
   
}