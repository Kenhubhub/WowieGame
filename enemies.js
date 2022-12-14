let numberEnemies = 2;
let ENEMY_RADIUS = 20;
let ENEMY_ACC = 1;
const ENEMY_COLOR = "#ff0000"
const enemyKilledScore = 100;
let BIG_RADIUS = 60;
const enemy_velocity = {
    x:2,
    y:2
}
class Enemy{
    constructor(x,y,size,vx,vy){
        this.x = x;
        this.y= y;
        this.size = size;
        this.dx = vx;
        this.dy = vy;
        this.alive = true;
        this.goalx = player.x;
        this.goaly = player.y;
        this.color = ENEMY_COLOR
        this.floatingxpos = x;
        this.floatingypos = y;
        this.type = "footsoldier";
    }
    render(){
        
        c.beginPath();
        c.arc(this.x,this.y,this.size,0,2*Math.PI);
        c.fillStyle = this.color;
        c.shadowColor = "#f50000";
        c.shadowBlur = 20;
        c.fill();
        c.closePath();
    }
    check_collision(){
        if(distance(dog.x,dog.y,this.x,this.y) < this.size){
            this.alive = false;
            
        }
    }
    followObject() {

      
        this.goalx = player.x;
        this.goaly = player.y;
        var xdiff = Math.abs(this.x - this.goalx);
        var ydiff = Math.abs(this.y - this.goaly);

        var xratio = 1;
        var yratio = 1;
        if(xdiff < ydiff){
            xratio = xdiff / ydiff;
        }
        else if(ydiff < xdiff){
            yratio = ydiff / xdiff;
        }

        // X
        if (this.goalx > this.x) {
            this.dx = ENEMY_ACC;
            this.floatingxpos += this.dx*xratio;
        }
        else if (this.goalx < this.x) {
            this.dx = -ENEMY_ACC;
            this.floatingxpos += this.dx*xratio;
        } else {
            this.dx = 0
         }

        // Y
        if (this.goaly > this.y) {
            this.dy = ENEMY_ACC;
            this.floatingypos += this.dy*yratio;
        }
        else if (this.goaly < this.y) {
            this.dy = -ENEMY_ACC;
            this.floatingypos += this.dy*yratio;
        } else { 
            this.dy = 0;
        }
        
        // console.log("followHuman: dx = "+this.dx+"  dy = "+this.dy);
    }
    update(){
        this.followObject();
        if(this.alive){
            this.x = Math.floor(this.floatingxpos);
            this.y = Math.floor(this.floatingypos);
            
        }
        
        
        
    }

}

let Enemies = [];
class bigBoy extends Enemy{
    constructor(x,y,size,vx,vy){
        super(x,y,size,vx,vy);
        this.size = BIG_RADIUS;
        
        this.type="bigboy";
        this.special = 5;
    }

}
class speedBoy extends Enemy{
    constructor(x,y,size,vx,vy){
        super(x,y,size,vx,vy);
        this.size = size/2;
        this.vx = 20*this.vx;
        this.vy = 20*this.vy;
        this.type="speedboy";
        this.color = "grey";
    }
}

class growBoy extends Enemy{
    constructor(x,y,size,vx,vy){
        super(x,y,size,vx,vy);
        this.size = size/2;
        this.vx = this.vx;
        this.vy = this.vy;
        this.type="growboy";
        this.color = "purple"
        this.sizeIncrement = 5;
        this.max_size = 90
    }
    update(){
        if(this.size < this.max_size){
            this.size += this.sizeIncrement;
        }
        this.followObject();
        if(this.alive){
            this.x = Math.floor(this.floatingxpos);
            this.y = Math.floor(this.floatingypos);
            
        }
    }
}
class kamikazeBoy extends Enemy{
    constructor(x,y,size,vx,vy){
        super(x,y,size,vx,vy);
        while((this.x < player.x+100 && this.x > player.x-100) && (this.y < player.y+100 && this.y > player.y-100)){
            this.x = Math.random() * innerWidth;
            this.y = Math.random() * innerHeight;
        }
        this.size = size/2;
        this.vx = PARTICLE_SPEED * Math.random() - 0.5;
        this.vy = PARTICLE_SPEED * Math.random() - 0.5;
        this.clock = 0;
        this.type="growboy";
        this.color = "green";
    }
    update(){
        if(this.clock == 600){
            this.alive = false;
        }
        this.clock++;
        this.x+=this.vx*5;
        this.y += this.vy*5;

    }

}
let enemytrack = 1;
//const enemyTypes = ["growBoy","bigBoy","speedBoy"];
const enemyTypes = [new growBoy(Math.random() * innerWidth,y = Math.random() * innerHeight,ENEMY_RADIUS,enemy_velocity.x,enemy_velocity.y),
    new bigBoy(Math.random() * innerWidth,y = Math.random() * innerHeight,ENEMY_RADIUS,enemy_velocity.x,enemy_velocity.y),
    new speedBoy(Math.random() * innerWidth,y = Math.random() * innerHeight,ENEMY_RADIUS,enemy_velocity.x,enemy_velocity.y)];

const populate = (numberEnemies) => {
    for(let i = 0 ; i< numberEnemies; i++){
        let x = player.x;
        let y = player.y;
        while((x < player.x+100 && x > player.x-100) && (y < player.y+100 && y > player.y-100)){
            x = Math.random() * innerWidth;
            y = Math.random() * innerHeight;
        }
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
const add_newEnemy = (number)=>{
    for(let i = 0 ; i < number;i++){
        let type = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
        let newEnemy = type;
        Enemies.push(newEnemy);

    }
}

//update
    //checks life of each enemy and collision with either 

let death_particles = []
let DEPRECATION_FRAMES = 20;
let deadScore = [];
let bossCount = 0;
const enemiesUpdate =() =>{
    //check if dog has hit enemy
    if(Enemies.length == 0){
        populate(numberEnemies+=1);
        add_newEnemy(numberEnemies);

    }
    //add a random enemy
    
    Enemies.forEach( enemy => {
        enemy.check_collision();
        if(!enemy.alive){
            death_particles.push(new particles(enemy.x,enemy.y));
            gameEngine.score += enemyKilledScore;
            let score = new Score(enemyKilledScore,enemy.x, enemy.y);
            bossCount++;
            if(bossCount == 5){
                add_newEnemy(enemytrack);
                enemytrack++;
            }
            if(bossCount == 10){
                console.log("bigboy added")
                let newBigboy =new bigBoy(innerWidth/2,innerHeight/2,BIG_RADIUS,enemy.vx,enemy.vy);
                Enemies.push(newBigboy);
                bossCount =0;
            }
            if(enemy.type == "bigboy"){
                for(let i = 0 ; i<enemy.special;i++){
                    let children = new kamikazeBoy(enemy.x + BIG_RADIUS ,enemy.y+ BIG_RADIUS,ENEMY_RADIUS,enemy.vx * Math.random(),enemy.vy*Math.random());
                    
                    Enemies.push(children);
                    console.log("spawned children");
                }
            }
            deadScore.push(score);
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
            enemytrack = 0;
            numberEnemies = 0;
            console.log("Game over bitch");
        }
    })

}