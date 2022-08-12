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

        // player
        this.goalx = player.x;
        this.goaly = player.y;
    }

    // follow human
    followObject(object) {
        this.goalx = object.x;
        this.goaly = object.y;
        var xdiff = this.x - this.goalx;
        var ydiff = this.y - this.goaly;

        // X
        if (xdiff > dogRadius) {
            this.dx = -dogAcc;
        }
        else if (xdiff < dogRadius) {
            this.dx = dogAcc;
        } else {
           this.dx = 0
        }

        // Y
        if (ydiff > dogRadius) {
            this.dy = -dogAcc;
        }
        else if (ydiff < dogRadius) {
            this.dy = dogAcc;
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
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }



    draw(){
        // console.log("dog"); 
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,2*Math.PI);
        c.fillStyle = "black";
        c.fill();
        c.closePath();
    }
}

let dog = new Dog(400,100,2);
dog.update();

