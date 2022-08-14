const timeToDelete = 10;

class Score {
    constructor(points,x,y) {
        this.points = points;
        this.x = x;
        this.delete = false;
        this.ogy = y;
        this.y = y;
    }

    draw() {
        c.font = "40px Arial";
        c.fillStyle = "orange";
        c.fillText("+100 ",this.x, this.y);
    }

    update() {
        this.y += 3;
        if (this.y < this.ogy + timeToDelete) {
            this.delete = true;
        }
        this.draw();
    }
}