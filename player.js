const PLAYER_RADIUS= 30;
const v ={
    x: 0,
    y: 0
}

window.addEventListener("keyup", e =>{
    v.x = 0;
    v.y = 0;
    console.log("triggerd")
})
class Player{
    constructor(x,y,v){
        this.radius = PLAYER_RADIUS;
        this.x = x;
        this.y = y;
        this.v = v;
        this.color = color;
    }
    update(v){
        this.x += v.x;
        this.y += v.y;
        
    }
    draw(){
        
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}

let player = new Player(500,500,v);
    