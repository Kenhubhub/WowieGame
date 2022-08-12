//Basic code to set up canvas
const canvas = document.querySelector("canvas")
canvas.height = innerHeight;
canvas.width = innerWidth;
const c = canvas.getContext("2d");
var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener("mousemove", e =>{
    mouse.x = e.x;
    mouse.y = e.y;
})
const colors = ['#f1c40f', '#f39c12', '#e67e22', '#d35400', '#e74c3c', '#c0392b'];
const color = colors[Math.floor(Math.random() * colors.length)];
function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
  
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}