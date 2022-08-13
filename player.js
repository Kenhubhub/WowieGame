const PLAYER_RADIUS= 30;
const PLAYER_SPEED = 2;


const v ={
    x: 0,
    y: 0
}

const a = {
    x: 0,
    y: 0
}


class Player{
    constructor(x,y,v){
        this.radius = PLAYER_RADIUS;
        this.x = x;
        this.y = y;
        this.v = v;
        this.color = color;
        this.alive = true;
        this.keyUpFlag = true;

    }
    update(){

        // check key presses
        if (keysDown.length > 0) {
            if (keyDown("ArrowDown") == true) {
                this.v.y = PLAYER_SPEED;
            }
            if (keyDown("ArrowUp") == true) {
                this.v.y = -PLAYER_SPEED;
            }
            if (keyDown("ArrowLeft") == true) {
                this.v.x = -PLAYER_SPEED;
            }
            if (keyDown("ArrowRight") == true) {
                this.v.x = PLAYER_SPEED;
            }
            //console.log("heheh")
        } 
        if (keysDown.length === 0) {
            this.v.x = 0;
            this.v.y = 0;
        }
        // console.log("check1: v.x: "+this.v.x+"  v.y: "+this.v.y+"---"+keysDown);
        // add velocity to position
        this.x += this.v.x;
        this.y += this.v.y;


        
        // check if within bounds
        if (this.x + this.radius > innerWidth) {
            this.x = innerWidth - this.radius;
        } else if (this.x - this.radius < 0) {
            this.x = this.radius;
        }
        if (this.y + this.radius > innerHeight) {
            this.y = innerHeight - this.radius;
        } else if (this.y - this.radius < 0) {
            this.y = this.radius;
        }
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = this.color;
        c.shadowColor = "#00ff00";
        c.shadowBlur = 20;
        c.fill();
        c.closePath();

        c.beginPath(); //Begins the process
        c.moveTo(this.x,this.y); //This sets the start point of the line
        c.lineTo(mouse.x,mouse.y) // This sets the end point of the line ! The context point
        //remains at this location.
        //Now it goes from previous positon to this new position
        c.strokeStyle = this.color;
        offset++;
        if (offset > 16) {
          offset = 0;
        }
        c.setLineDash([4, 16]);
        c.lineDashOffset = -offset;
        c.stroke();
    }
}

const playerStartX = 300;
const playerStartY = 300;
    
let player = new Player(300,300,v);