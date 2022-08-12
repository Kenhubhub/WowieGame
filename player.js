const PLAYER_RADIUS= 30;
const PLAYER_SPEED = 10;
const v ={
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
    }
    update(v){
        this.x += v.x;
        this.y += v.y;
        
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
                    v.x = 0;
                    v.y = PLAYER_SPEED;
                                    break;
            case "ArrowUp":
                    v.x = 0;
                    v.y = -PLAYER_SPEED;
                        
                    break;
            case "ArrowLeft":
                v.x = -PLAYER_SPEED;
                v.y = 0;
                break;
            case "ArrowRight":
                v.x = PLAYER_SPEED;
                v.y = 0;    
                break;
            default:
                    v.x = 0;
                    v.y = 0
                    break;
    
        }
    }
}

let player = new Player(500,500,v);
    