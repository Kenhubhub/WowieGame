class PowerUp {
    constructor(){
        this.x = Math.random()*(innerWidth-400) + 200;
        this.y = Math.random()*(innerHeight-400) + 200;
        this.sprite = document.getElementById("crazy_frog");
        this.collected = false;
        this.type = "speed";
        this.counter = 0;
    }

    draw() {
        if (this.collected == false) {
            c.drawImage(this.sprite, 0, 0, 400, 750, this.x, this.y, 40, 70);
        } else {
            c.font = "20px Arial";
            c.fillStyle = "white";
            c.fillText("SPEED", player.x-50,player.y-30);
        }
    }

    update() {
        // check for collision with dog
        let dist = distance(this.x+20, this.y+35, dog.x, dog.y);
        if (dist < player.radius) {
            this.collected = true;
        }
        if (this.collected == true) {


        }
        this.draw();
    }
}

class Rambo extends PowerUp {

}

let powerUps = [];

let speedPowerUp = new Rambo();
powerUps.push(speedPowerUp);