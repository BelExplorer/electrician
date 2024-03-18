const navbar = document.querySelector("#nav-bar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", function() {
    navbar.classList.add("visible");
})

cerrar.addEventListener("click", function() {
    navbar.classList.remove("visible");
})

