function mostrarMenu() {
  const menu = document.getElementById("menuPrincipal");
  const boton = document.getElementById("btnMenu");

  if (menu.classList.contains("oculto")) {
    document.querySelectorAll("section").forEach(sec => sec.classList.add("oculto"));
    menu.classList.remove("oculto");
    boton.innerText = "❌ Cerrar Menú";
  } else {
    document.querySelectorAll("section").forEach(sec => sec.classList.add("oculto"));
    boton.innerText = "📋 Ver Menú";
  }
}

function mostrarSeccion(seccion) {
  document.getElementById("menuPrincipal").classList.add("oculto");
  document.getElementById(seccion).classList.remove("oculto");
}

function mostrarSub(sub) {
  let subs = document.querySelectorAll(".sub");
  subs.forEach(s => s.classList.add("oculto"));

  document.getElementById(sub).classList.remove("oculto");
}

function volverMenu() {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("oculto"));
  document.getElementById("menuPrincipal").classList.remove("oculto");
}