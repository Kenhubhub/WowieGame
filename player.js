const PLAYER_RADIUS= 30;
class Player{
    constructor(x,y,v){
        this.radius = PLAYER_RADIUS;
        this.x = x;
        this.y = y;
        this.v = v;
        this.color = color;
    }
    update(x,y){
        this.x = this.v.x;
        this.y = this.v.y;
    }
    draw(){
        console.log("begins"); 
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}

let player = new Player(500,500,2);
player.draw();         