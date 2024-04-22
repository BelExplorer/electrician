/* OPEN/CLOSE MENU */

const navbar = document.querySelector("#nav-bar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", function() {
    navbar.classList.add("visible");
})

cerrar.addEventListener("click", function() {
    navbar.classList.remove("visible");
})

for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".nav-menu-item") [i].addEventListener("click", function() {
        navbar.classList.remove("visible");
    })
}

document.querySelector("main").addEventListener("click", function() {
    navbar.classList.remove("visible");
})

/* SCROLL UP MENU */

let ubicacionInicial = window.scrollY;
window.onscroll = function() {
    let desplazamientoActual = window.scrollY; 
    if (ubicacionInicial >= desplazamientoActual) {
        document.querySelector("#header").style.top = "0";
    }
    else {
        document.querySelector("#header").style.top = "-120px";
    }
    ubicacionInicial = desplazamientoActual;
}

