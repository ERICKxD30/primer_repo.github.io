"use strict";

function colorado() {

  let colores = document.getElementById("colores").value,
    letra = document.getElementById("palabra"),
    historial = document.getElementById("historial"),
    resultado = document.getElementById("resultado");

  if (colores) {
    letra.value = colores;
    historial.innerHTML += "<option>" + colores + "</option>";
    resultado.style.background = eng(colores);
  }

}

function limpiar() {
  let historial = document.getElementById("historial"),
    resultado = document.getElementById("resultado");
  historial.innerHTML = "";
  resultado.style.background = "white";
}

function eng(col) {

  switch (col) {
    case "Rojo": return "red";
    case "Azul": return "blue"
    case "Verde": return "green";
    case "Cafe": return "saddlebrown";
    case "Morado": return "purple";
    case "Rosa": return "deeppink";
    case "Plata": return "lightgray";
    case "Negro": return "black";
    default:
      break;
  }
}