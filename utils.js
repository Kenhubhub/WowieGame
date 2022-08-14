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

// will hold all the keys currently pressed down
let keysDown = {
    W: false,
    A: false,
    S: false,
    D: false,
    SPACE: false
};

// function to check if a specific key is in a list
function keyDown(key) {
    return keysDown[key];
}

///----Animation for explosions-----///
const PARTICLE_SIZE = 5;
const PARTICLE_SPEED = 1;
const NUMBER_PARTICLES = 10;
const particle_velocity = [1,-1]
const PARTICLE_COLOR = "rgba(255,255,0,0.5)";
class particle{
    constructor(x,y,vx,vy){
        this.x = x;
        this.y = y;
        this.color = PARTICLE_COLOR;
        this.size = PARTICLE_SIZE;
        this.speed = PARTICLE_SPEED;
        this.vx = vx;
        this.vy = vy;
    }
    render(){
        c.beginPath();
        c.arc(this.x,this.y,PARTICLE_SIZE,0,2*Math.PI);
        c.shadowColor = "#f50000";
        c.shadowBlur = 20;
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        
    }
    update(){
        this.x += this.speed * this.vx;
        this.y += this.speed *this.vy;
    }
}

class particles {
    constructor(x,y){
        this.color = PARTICLE_COLOR;
        this.batch = [];
        for(let i = 0 ; i<NUMBER_PARTICLES; i++){
            let vx = PARTICLE_SPEED * Math.random() - 0.5;
            let vy = PARTICLE_SPEED * Math.random() - 0.5;
            let newParticle = new particle(x,y,vx,vy);
            this.batch.push(newParticle);
        }
        this.time = 0;
    }
    update(){
        this.time++;
        this.batch.forEach( part => {
            part.update();
            part.render();
        })
    }
}
const generate_particles = (x,y,color) => {
    let particles = [];
    for(let i = 0; i<NUMBER_PARTICLES; i++){
        let newParticle = new particle(x,y,color);
        particles.push(newParticle);
    }
    return particles;
}