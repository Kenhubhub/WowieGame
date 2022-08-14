const PLAYER_RADIUS= 30;
const PLAYER_ACC = 10;


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
        this.notMovingFlag = true;

        this.BASE_SPEED = 4;
        this.PLAYER_SPEED = this.BASE_SPEED;

        

        // for jump to dog
        this.floatingxpos = x;
        this.floatingypos = y;
        // powerups
        this.powerUps = [];

    }
    update(){
        // POWERUPS
        for (let x of powerUps) {
            console.log("collected: " + x.collected)
            if (x.collected == true) {
                
                this.powerUps.push(x);
                powerUps.pop()
            }
        }
        console.log("player.powerUps: "+this.powerUps.length)
        // count up
        // speed powerUp
        for (let x of this.powerUps) {
            // speed
            if (x.type = "speed") {
                this.PLAYER_SPEED = 7;
                x.counter += 1;
                console.log("speed!!!!!")
            }
        }
        for (let x of this.powerUps) {
            // speed
            console.log("x.counter: "+x.counter.toString())
            if (x.counter > 1000) {
                this.powerUps.pop();
                console.log("nospeed!!!!!")
                this.PLAYER_SPEED = this.BASE_SPEED;
            }
        }

        // console.log("powerUpsCounter: "+this.powerUps[0].counter.toString())
        // remove powerUp after certain time



        this.notMovingFlag = true;
        if (keysDown.W == true || keysDown.S == true) {
            if (keysDown.W == true){
                this.v.y = -this.PLAYER_SPEED;
                this.floatingypos += this.v.y;
            }
            if (keysDown.S == true){
                this.v.y = this.PLAYER_SPEED;
                this.floatingypos += this.v.y;
            }
            this.notMovingFlag = false;
        }
        else {
            this.v.y = 0;
        }
        /*if (keysDown.S == true) {
            this.v.y = PLAYER_SPEED;
            this.notMovingFlag = false;
        }*/
        if (keysDown.A == true || keysDown.D == true) {
            if (keysDown.A == true){
                this.v.x = -this.PLAYER_SPEED;
                this.floatingxpos += this.v.x;
            }
            if (keysDown.D == true){
                this.v.x = this.PLAYER_SPEED;
                this.floatingxpos += this.v.x;
            }
            this.notMovingFlag = false;
        }
        else {
            this.v.x = 0;
        }
        /*if (keysDown.D == true) {
            this.v.x = PLAYER_SPEED;
            this.notMovingFlag = false;
        }*/
        
        if (this.notMovingFlag == true) {
            this.v.x = 0;
            this.v.y = 0;
        }

        // check if grappling
        if (grapple.grappling == true) {
            this.PLAYER_SPEED = this.BASE_SPEED;   // delete this to revert grappling swing changes
            
            this.goalx = dog.x;
            this.goaly = dog.y;
            var xdiff = Math.abs(this.x - this.goalx);
            var ydiff = Math.abs(this.y - this.goaly);

            // ratios between x and y distances to goal
            var xratio = 1;
            var yratio = 1;

            if(xdiff < ydiff){
                xratio = xdiff / ydiff;
            }
            else if(ydiff < xdiff){
                yratio = ydiff / xdiff;
            }

            // X
            if ((this.goalx < this.x) && (xdiff > this.radius)) {
                this.v.x = -PLAYER_ACC;
                this.floatingxpos += this.v.x*xratio;
            }
            else if ((this.goalx > this.x) && (xdiff > this.radius)) {
                this.v.x = PLAYER_ACC;
                this.floatingxpos += this.v.x*xratio;
            } else {
            this.dx = 0
            }

            // Y
            if ((this.goaly < this.y) && (ydiff > dogRadius)) {
                this.v.y = -PLAYER_ACC;
                this.floatingypos += this.v.y*yratio;
            }
            else if ((this.goaly > this.y) && (ydiff > dogRadius)) {
                this.v.y = PLAYER_ACC;
                this.floatingypos += this.v.y*yratio;
            } else { 
                this.v.y = 0;
            }

        }
        else { // delete this to revert grappling swing changes
            this.PLAYER_SPEED = 5;
        }


        // console.log("check1: v.x: "+this.v.x+"  v.y: "+this.v.y+"---"+keysDown);
        // add velocity to position
        //this.x += this.v.x;
        //this.y += this.v.y;
        this.x = Math.floor(this.floatingxpos);
        this.y = Math.floor(this.floatingypos);


        

        
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
        
        this.powerUps.forEach( powerUp => {
            powerUp.update();
        })
    }

    draw(){
        c.lineWidth = 2;
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