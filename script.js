function mostrarMenu() {
  document.getElementById("menuPrincipal").classList.toggle("oculto");
}

function mostrarSeccion(id) {
  document.getElementById("menuPrincipal").classList.add("oculto");

  document.getElementById("bebidas").classList.add("oculto");
  document.getElementById("comida").classList.add("oculto");

  document.getElementById(id).classList.remove("oculto");
}

function mostrarSub(id) {
  let subs = document.querySelectorAll(".sub");

  subs.forEach(sub => sub.classList.add("oculto"));

  document.getElementById(id).classList.remove("oculto");
}

function volverMenu() {
  document.getElementById("bebidas").classList.add("oculto");
  document.getElementById("comida").classList.add("oculto");

  document.getElementById("menuPrincipal").classList.remove("oculto");
}