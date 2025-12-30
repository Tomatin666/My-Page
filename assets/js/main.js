const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.onclick = () => {
  mainNav.classList.toggle("show");

  if (mainNav.classList.contains("show")) {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
  }
};

function informacion(button) {
  let info = button.parentElement.querySelector(".display");

  // toggle devuelve true si añade la clase, false si la quita
  let oculto = info.classList.toggle("hidden");

  if (oculto) {
    button.textContent = "+ Info"; // cuando está oculto
  } else {
    button.textContent = "- Info"; // cuando está visible
  }
}
/* Carrusel */
var imagenArray, indice, siguiente, anterior;
indice = 0;
siguiente = document.querySelector("#siguienteBtn");
anterior = document.querySelector("#atrasBtn");
imagenArray = [
  {
    imagen: "assets/img/calcu.png",
    link: "https://isil-calculadora.netlify.app/",
  },
  {
    imagen: "assets/img/web1.png",
    link: "https://pa4-abogados.netlify.app/",
  },
];

function mostrarImagen() {
  let imagenActual = imagenArray[indice];
  document.querySelector("#img-carrusel").src = imagenActual.imagen;
  document.querySelector("#link").href = imagenActual.link;
}
mostrarImagen();

siguiente.onclick = () => {
  indice = (indice + 1) % imagenArray.length;
  mostrarImagen();
};
anterior.onclick = () => {
  indice = (indice - 1 + imagenArray.length) % imagenArray.length;
  mostrarImagen();
};
