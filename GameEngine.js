class GameEngine {
    constructor() {
        this.gameState = "menu";
        this.flash = true;
        populate(numberEnemies);
    }

    update() {
        dog.update();
        player.update();
        stick.update();
    }


    ///////////////////////////////////////////
    //          DIFFERENT SCREENS           //
    //////////////////////////////////////////
    play() {
        c.clearRect(0,0,innerWidth,innerHeight);
        dog.update();
        player.update();
        player.draw();
        stick.update();
        stick.render();
        enemiesRender();
        enemiesUpdate();
        if (player.alive == false) {
            this.gameState = "backToMenu"
        }
    }

    menu() {
        console.log("DEADMENU!!");
        c.clearRect(0,0,innerWidth,innerHeight);
        c.font = "100px Arial";
        c.fillStyle = "#e1e1e1"
        // setInterval(()=>{
        //     if(this.flash){
        //         console.log("")
        //         
        //         c.shadowBlur = 0;
                
                
        //         this.flash = false;
        //     }else{
        //     }
            
        // },200)
        c.shadowColor = "#f5f200";
        c.shadowBlur = 50;
        this.flash= true;
        c.fillText("FETCH", (innerWidth/2)-400,200);
        c.font = "30px Arial";
        
        c.fillText("Collaborate with your robot dog to kill enemies", (innerWidth/2)-400,300);
        c.fillText("press anywhere to play", (innerWidth/2)-70,400);
        console.log("working");
        //requestAnimationFrame(this.menu.bind(this));
      
    }
    
    backToMenu() {
        console.log("respawn!!");
        c.clearRect(0,0,innerWidth,innerHeight);
        c.font = "50px Arial";
        c.fillStyle = "white"
        c.fillText("GAME OVER", (innerWidth/2)-400,200);
        c.font = "30px Arial";
        c.fillStyle = "white"
        c.fillText("press anywhere to return to menu", (innerWidth/2)-70,400);
    }
    

    ///////////////////////////////////////////
    //              LOGIC                   //
    //////////////////////////////////////////
    stateLogic(e) {
        if (gameEngine.gameState == "play") {
            // throw the stick
            if (stick.state == "inHand") {
                stick.throw(e.clientX, e.clientY);
            }
            if (Enemies.length == 0) {
                gameEngine.gameState = "menu";
            }
        }
        else if (gameEngine.gameState == "menu") {
            // reset game variables
            Enemies = []
            gameEngine.gameState = "play";
            populate(numberEnemies);
        }
        else if (gameEngine.gameState == "backToMenu") {
            gameEngine.gameState = "menu";
        } else {gameEngine.gameState = "menu";}
    }

    ///////////////////////////////////////////
    //             GAME LOGIC               //
    //////////////////////////////////////////  
    resetGame() {
        // reset enemy list
        Enemies = [];
        // reset player, stick and dog coord
        player.x = playerStartX;
        player.y = playerStartY;
        stick.x = player.x;
        stick.y = player.y;
        dog.x = dogStartX;
        dog.y = dogStartY;

        player.alive = true;
    }  
}

let gameEngine = new GameEngine();
