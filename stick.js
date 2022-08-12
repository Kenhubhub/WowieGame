const STICK_SIZE = PLAYER_RADIUS/2

class Stick{
    constructor(readyThrow,playerx,playery,x,y){
        this.readyThrow = readyThrow;
        this.x = x;
        this.y = y;
        this.px = playerx;
        this.py = playery;
    }
    render(){
        c.beginPath();
        c.arc(this.x,this.y,STICK_SIZE,0,2*Math.PI);
        c.fillStyle = "rgba(100,155,100,0.5)";
        c.fill();
        c.closePath();

    
    }

}

let stick = new Stick(true,player.x,player.y,300,300);


