//Basic code to set up canvas
const canvas = document.querySelector("canvas")
canvas.height = innerHeight;
canvas.width = innerWidth;
const c = canvas.getContext("2d");
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
const color = colors[Math.floor(Math.random() * colors.length)];
function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
  
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

