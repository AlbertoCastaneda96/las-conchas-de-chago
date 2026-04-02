function mostrarMenu() {
  document.getElementById("menuPrincipal").classList.toggle("oculto");
}

function mostrarSeccion(seccion) {
  document.getElementById("menuPrincipal").classList.add("oculto");

  document.getElementById("bebidas").classList.add("oculto");
  document.getElementById("comida").classList.add("oculto");

  document.getElementById(seccion).classList.remove("oculto");
}

function mostrarSub(subseccion) {
  let subs = document.querySelectorAll(".sub");

  subs.forEach(sub => sub.classList.add("oculto"));

  document.getElementById(subseccion).classList.remove("oculto");
}

function volverMenu() {
  document.getElementById("bebidas").classList.add("oculto");
  document.getElementById("comida").classList.add("oculto");

  document.getElementById("menuPrincipal").classList.remove("oculto");
}