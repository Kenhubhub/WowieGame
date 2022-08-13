


window.addEventListener("keydown", e =>{
    console.log(e.key);
    if (keysDown.includes(e.key) == false) {
        keysDown.push(e.key);
    }
})

window.addEventListener("keyup", e =>{
    var index = keysDown.findIndex(str => {return str == e.key});
    keysDown.splice(index);
    console.log("triggerd");
})

window.addEventListener("click", e => {
    console.log("CLICK");
    if (gameEngine.gameState == "play") {
        // through the stick
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
})

function animate() {
    // different stages: MENU, PLAY, RESPAWN
    requestAnimationFrame(animate)
    console.log("gameState: "+gameEngine.gameState);
    console.log("player.alive "+player.alive)
    switch(gameEngine.gameState) {
        case "menu":
            player.alive = true;
            gameEngine.menu();
            break;
        case "play":
            gameEngine.play();
            break;
        case "backToMenu":
            player.alive = true;
            gameEngine.backToMenu();
            break;
        default:
            break;
    } 
}





animate();