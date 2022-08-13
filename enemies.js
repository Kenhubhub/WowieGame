let numberEnemies = 10;
let ENEMY_RADIUS = 20;
let ENEMY_ACC = 1;
const ENEMY_COLOR = "#ff0000"
const enemy_velocity = {
    x:2,
    y:2
}
class Enemy{
    constructor(x,y,size,vx,vy,dog){
        this.x = x;
        this.y= y;
        this.size = size;
        this.dx = vx;
        this.dy = vy;
        this.alive = true;
        this.goalx = player.x;
        this.goaly = player.y;
        this.color = ENEMY_COLOR
        
    }
    render(){
        
        c.beginPath();
        c.arc(this.x,this.y,ENEMY_RADIUS,0,2*Math.PI);
        c.fillStyle = this.color;
        c.shadowColor = "#f50000";
        c.shadowBlur = 20;
        c.fill();
        c.closePath();
    }
    check_collision(){
        if(distance(dog.x,dog.y,this.x,this.y) < 30){
            this.alive = false;
            death_animation(this.color,this.x,this.y);
        }
    }
    followObject() {

      
        this.goalx = player.x;
        this.goaly = player.y;
        var xdiff = this.x - this.goalx;
        var ydiff = this.y - this.goaly;

        // X
        if (this.goalx > this.x) {
            this.dx = ENEMY_ACC;
        }
        else if (this.goalx < this.x) {
            this.dx = -ENEMY_ACC;
        } else {
            this.dx = 0
         }

        // Y
        if (this.goaly > this.y) {
            this.dy = ENEMY_ACC;
        }
        else if (this.goaly < this.y) {
            this.dy = -ENEMY_ACC;
        } else { 
            this.dy = 0;
        }
        
        // console.log("followHuman: dx = "+this.dx+"  dy = "+this.dy);
    }
    update(){
        this.followObject();
        if(this.alive){
            this.x += this.dx;
            this.y +=this.dy;
            
        }
        
        
        
    }

}
let Enemies = [];
const populate = (numberEnemies) => {
    for(let i = 0 ; i< numberEnemies; i++){
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let newEnemy = new Enemy(x,y,ENEMY_RADIUS,enemy_velocity.x,enemy_velocity.y);
        Enemies.push(newEnemy);
    }
}
//renders array of enemies
const enemiesRender = () =>{
    
    Enemies.forEach( enemy => {
        if(enemy.alive){

            enemy.render();
        }
    })
}

//update
    //checks life of each enemy and collision with either 
let death_particles = []
let DEPRECATION_FRAMES = 200;
const enemiesUpdate =() =>{
    //check if dog has hit enemy
    
    Enemies.forEach( enemy => {
        enemy.check_collision();
        if(!enemy.alive){
            death_particles.push(new particles(enemy.x,enemy.y));
        }
    })
    //Filter enemies who are dead and remove from array of enemies
    Enemies = Enemies.filter( enemy => {
        
        return enemy.alive;
        
    })
    //Update every alive enemies position
    Enemies.forEach( enemy =>{
        enemy.update();
        
    })
    //Update particles spawned from death
    death_particles.forEach( batch =>{
        batch.update();
    })
    //If particles have been travlling for 5 frames then remove
    death_particles = death_particles.filter( batch=>{
        return !(batch.time==DEPRECATION_FRAMES)
    })
    //check if enemy has reached player and if true set player.alive = false
    //can implement a gameover screen from the use of player.alive status.
    Enemies.forEach( enemy =>{
        if(distance(player.x,player.y,enemy.x,enemy.y) < PLAYER_RADIUS){
            player.alive = false;
            console.log("Game over bitch");
        }
    })

}