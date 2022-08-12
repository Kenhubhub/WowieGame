const dogRadius= 30;
const maxDogSpeed = 5;
const dogAcc = 1;



class Dog{
    constructor(x,y,v){
        this.r = dogRadius;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.color = color;

        // player
        this.playerx = player.x;
        this.playery = player.y;
    }

    // follow human
    followHuman() {
        var xdiff = this.x - this.playerx;
        var ydiff = this.y - this.playery;

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
            this.dy = 0;}
        console.log("followHuman: dx = "+this.dx+"  dy = "+this.dy);
    }



    update(x,y){
        // follow human
        this.followHuman();

        // check for max velocity


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
        console.log("dog"); 
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,2*Math.PI);
        c.fillStyle = "black";
        c.fill();
        c.closePath();
    }
}

let dog = new Dog(400,100,2);
dog.update();

