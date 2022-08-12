const STICK_SIZE = PLAYER_RADIUS/3;
const THROWING_SPEED = 0.03;
let offset = 0;

class Stick{
    constructor(readyThrow,playerx,playery,x,y){
        // "inHand", "thrown", "stationary", "inDogMouth"
        this.state = "inHand";
        this.readyThrow = readyThrow;
        this.x = x;
        this.y = y;
        this.px = playerx;
        this.py = playery;

        //throwing
        this.finalPosX = 0;
        this.finalPosY = 0;
    }

    throw(x,y) {
        this.state = "thrown";
        this.finalPosX = x;
        this.finalPosY = y;
    }


    update(){
        switch(this.state) {
            case "inHand":
            // in players hands
            this.x = player.x + player.radius-10;
            this.y = player.y + player.radius-25;
            break;

            case "thrown":                
            // if thrown
            let xDiff = this.finalPosX - this.x;
            let yDiff = this.finalPosY - this.y;
            if (Math.abs(xDiff) > 2 && Math.abs(yDiff) > 2) {
                this.x += (xDiff)*THROWING_SPEED;
                this.y += (yDiff)*THROWING_SPEED;
            }
            else {
                this.state = "stationary";
            }
            // check if dog has it
            break;

            case "stationary":
            // if stationary
                // check if dog has it
                let dist2 = distance(dog.x, dog.y, this.x, this.y);
                if (dist2 < dog.r + 10) {
                    this.state = "inDogsMouth";
                }
            break;

            case "inDogsMouth":
            // if in dogs mouth
            this.x = dog.x + dog.r-10;
            this.y = dog.y + dog.r-25;
            // check if close to player
            let dist3 = distance(player.x, player.y, this.x, this.y) 
            if (dist3 < 60) {
                this.state = "inHand";
            }
            break;

        }
    }
    render(){
        if (this.state == "thrown") {
            console.log("inair")
            c.beginPath();
            c.arc(this.x+3,this.y+10,STICK_SIZE,0,2*Math.PI);
            c.fillStyle = "rgba(0,0,0,0.3)";
            c.fill();
            c.closePath();
        }

        c.beginPath();
        c.arc(this.x,this.y,STICK_SIZE,0,2*Math.PI);
        c.fillStyle = "rgba(255,255,255,1)";
        c.strokeStyle = "black";
        c.fill();
        c.stroke();
        c.closePath();
        // shadow

    }
    

}

let stick = new Stick(true,player.x,player.y,300,300);


