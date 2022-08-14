class Grapple{
    constructor(startx, starty, endx, endy) {
        this.grappling = false;
        this.startx = startx;
        this.starty = starty;
        this.endx = endx;
        this.endy = endy;
        this.x = startx;
        this.y = starty;
        console.log("hehehe");
    }

    draw() {
        if (this.grappling == true) {
            // draw line from player to grapple
            c.strokeStyle = "white";
            c.lineWidth = 5;
            c.beginPath(); //Begins the process
            c.moveTo(player.x,player.y); //This sets the start point of the line
            c.lineTo(dog.x,dog.y) // This sets the end point of the line ! The context point
            c.stroke();
            c.closePath();
        }

        // draw circle at grapple
    }
}

console.log("grapp");

let grapple = new Grapple(100,100, 400,400);