/* RETOUR SOMMET PAGE AUTO
la position scroll de la précédente consultation de la page
semblait rester dans le cache et causait des problèmes de visibilité */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/* NAVIGATION RESPONSIVE */
document.addEventListener('DOMContentLoaded', function() {
    let nav = document.querySelector('nav');
    let navLinks = nav.querySelector('.navliens');
    let hamburgerElement = nav.querySelector('.hamburger');
    hamburgerElement.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


/* SWITCHER CLAIR 
Je souhaitais ajouter un une fonctionnalité de persistance 
pour le theme au changement de page grace à localStorage, mais 
je n'ai pas réussi à le faire fonctionner correctement sans utilise l'IA.

function lightMode() {
   let page = document.body;
   // applique ou retire la classe "lightmode" au body
   page.classList.toggle("lightmode"); 
   

   // change le texte du bouton et son style
   let bouton = document.getElementById("theme");
    if (bouton.innerHTML === "Light") {
        bouton.innerHTML = "Dark";
        bouton.style.backgroundColor = "#333"
        bouton.style.color = "white";
    } else {
        bouton.innerHTML = "Light";
        bouton.style.backgroundColor = "white"
        bouton.style.color = "black";
    } 
}*/

/* SWITCHER CLAIR AVEC PERSISTANCE
    grace à l'IA */

document.addEventListener('DOMContentLoaded', function() {
    let page = document.body;
    // Applique le mode sauvegardé
    if (localStorage.getItem("mode") === "light") {
        page.classList.add("lightmode");
    } else {
        page.classList.remove("lightmode");
    }
});

function lightMode() {
    let page = document.body;
    page.classList.toggle("lightmode");
    if (page.classList.contains("lightmode")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
}