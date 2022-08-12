const PLAYER_RADIUS= 30;
const PLAYER_SPEED = 1;
const PLAYER_MAX_SPEED = 5;
const PLAYER_ACC = 0.1;
const PLAYER_MAX_ACC = 0.2;
const PLAYER_STOP = 10;

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
        // check vel limit
        if (this.v.x > PLAYER_MAX_SPEED) {
            this.v.x = PLAYER_MAX_SPEED;
        }
        else if (this.v.x < -PLAYER_MAX_SPEED) {
            this.v.x = -PLAYER_MAX_SPEED;
        }
        if (this.v.y > PLAYER_MAX_SPEED) {
            this.v.y = PLAYER_MAX_SPEED;
        }
        else if (this.v.y < -PLAYER_MAX_SPEED) {
            this.v.y = -PLAYER_MAX_SPEED;
        }
        // check if within bounds
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.v.x = -this.v.x;
            
            console.log("out of bounds")
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.v.y = -this.v.y;
        }

        // deccelerate
        if (this.keyUpFlag == true) {
            if (Math.abs(this.v.x) > 10) {
                this.a.x = -this.a.x;

            } else {}
        }

        this.v.x += this.a.x;
        this.v.y += this.a.y;

        this.x += this.v.x;
        this.y += this.v.y;

        console.log("playerMove-"+this.a.x+"-"+this.v.x+"-"+this.x+this.y)
        
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
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
    