class Boss {
    constructor() {
        // animation 
        this.counter = 0;
        this.up = true;
        this.gun = document.getElementById("golden_gun");
        this.pepe = document.getElementById("pepe_boss");
    }

    draw() {
        c.drawImage(this.pepe, 0, 0, 1000, 800, 50, 200, 500, 350);
        c.drawImage(this.gun, 0, 0, 750, 650, 350, innerHeight/2 + this.counter/8, 300, 200);
        if (this.up) {
            this.counter += 1;
        } else {
            this.counter -=1
        }
        if (this.counter > 20) {this.up = false;}
        if (this.counter < -20) {this.up = true;}
    }
}

var boss = new Boss();