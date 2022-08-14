const dogRadius= 20;
const maxDogSpeed = 18;
const dogAcc = 3;



class Dog{
    constructor(x,y,v){
        this.state = "stick";
        this.r = dogRadius;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.color = color;

        //floating x holder for smooth diagonal movement
        this.floatingxpos = x;
        this.floatingypos = y;

        // player
        this.goalx = player.x;
        this.goaly = player.y;
    }

    // follow human
    followObject(object) {
        this.goalx = object.x;
        this.goaly = object.y;
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
        if ((this.goalx < this.x) && (xdiff > dogRadius)) {
            this.dx = -dogAcc;
            this.floatingxpos += this.dx*xratio;
        }
        else if ((this.goalx > this.x) && (xdiff > dogRadius)) {
            this.dx = dogAcc;
            this.floatingxpos += this.dx*xratio;
        } else {
           this.dx = 0
        }

        // Y
        if ((this.goaly < this.y) && (ydiff > dogRadius)) {
            this.dy = -dogAcc;
            this.floatingypos += this.dy*yratio;
        }
        else if ((this.goaly > this.y) && (ydiff > dogRadius)) {
            this.dy = dogAcc;
            this.floatingypos += this.dy*yratio;
        } else { 
            this.dy = 0;
        }
        // console.log("followHuman: dx = "+this.dx+"  dy = "+this.dy);
    }


    update(x,y){
        switch(this.state) {
            // FOLLOW HUMAN
            case "human":
            this.followObject(player);
            if (stick.state == "thrown" || stick.state == "stationary") {
                this.state = "stick";
            }
            break;
             
            // CHASE STICK
            case "stick":               
            this.followObject(stick);
            if (stick.state == "inDogsMouth" || stick.state == "inHand") {
                this.state = "human";
            }
            break;

        }
        
        // check if within bounds
        if (this.x > innerWidth + dogRadius|| this.x < 0 || this.y> innerHeight || this.y < 0) {
            this.x = innerWidth/2;
            this.y = innerHeight/2;
        }
        
        this.x = Math.floor(this.floatingxpos);
        this.y = Math.floor(this.floatingypos);

        this.draw();
    }



    draw(){
        // console.log("dog"); 
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,2*Math.PI);
        c.fillStyle = "black";
        c.shadowColor = "#0000f5";
        c.shadowBlur = 20;
        c.fill();
        c.closePath();
    }
}

const dogStartX = 400;
const dogStartY = 100;

let dog = new Dog(400,100,2);

