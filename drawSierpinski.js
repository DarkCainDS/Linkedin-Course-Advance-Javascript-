// Definimos las variables iniciales
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var size = canvas.width = canvas.height = 400;
var level = 4;

// Función para dibujar la alfombra
function drawSierpinski(x, y, size, level) {
  // Caso base
  if (level === 0) {
    ctx.fillRect(x, y, size, size);
  } else {
    // Dividimos el cuadrado en 9 partes
    var newSize = size / 3;
    drawSierpinski(x, y, newSize, level - 1);
    drawSierpinski(x + newSize, y, newSize, level - 1);
    drawSierpinski(x + 2 * newSize, y, newSize, level - 1);
    drawSierpinski(x, y + newSize, newSize, level - 1);
    drawSierpinski(x + 2 * newSize, y + newSize, newSize, level - 1);
    drawSierpinski(x, y + 2 * newSize, newSize, level - 1);
    drawSierpinski(x + newSize, y + 2 * newSize, newSize, level - 1);
    drawSierpinski(x + 2 * newSize, y + 2 * newSize, newSize, level - 1);
  }
}

// Dibujamos la alfombra
ctx.fillStyle = "#000";
drawSierpinski(0, 0, size, level);
