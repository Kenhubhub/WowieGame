//Basic code to set up canvas
const canvas = document.querySelector("canvas")
canvas.height = innerHeight;
canvas.width = innerWidth;
const c = canvas.getContext("2d");

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
  
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}