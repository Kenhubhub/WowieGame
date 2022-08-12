const PLAYER_RADIUS= 30;
const PLAYER_SPEED = 1;
const PLAYER_ACC = 0.1;


const v ={
    x: 0,
    y: 0
}

const a = {
    x: 0,
    y: 0
}


class Player{
    constructor(x,y,v,a){
        this.radius = PLAYER_RADIUS;
        this.x = x;
        this.y = y;
        this.v = v;
        this.a = a;
        this.color = color;

        this.keyUpFlag = true;

    }
    update(){

        this.x += this.v.x;
        this.y += this.v.y;

        console.log("playerMove-"+this.a.x+"-"+this.v.x+"-"+this.x+this.y)
        
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
        c.fill();
        c.closePath();

        c.beginPath(); //Begins the process
        c.moveTo(this.x,this.y); //This sets the start point of the line
        c.lineTo(mouse.x,mouse.y) // This sets the end point of the line ! The context point
        //remains at this location.
        //Now it goes from previous positon to this new position
        c.strokeStyle = color;
        offset++;
        if (offset > 16) {
          offset = 0;
        }
        c.setLineDash([4, 16]);
        c.lineDashOffset = -offset;
        c.stroke();
    }

    move(event) {
        switch(event){
            case "ArrowDown": 
                this.a.x = 0;
                this.a.y = PLAYER_ACC;
                break;
            case "ArrowUp":
                this.a.x = 0;
                this.a.y = -PLAYER_ACC;
                break;
            case "ArrowLeft":
                this.a.x = -PLAYER_ACC;
                this.a.y = 0;
                break;
            case "ArrowRight":
                this.a.x = PLAYER_ACC;
                this.a.y = 0;    
                break;
            default:
                // will only run if other than those keys are pressed
                break;
    
        }
    }
}

let player = new Player(300,300,v,a);
    