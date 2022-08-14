    ///////////////////////////////////////////
    //          EVENT LISTENERS              //
    //////////////////////////////////////////
window.addEventListener("keydown", e =>{
    // console.log(e.key);
    if (e.key == "w") {
        keysDown.W = true;
    }
    else if (e.key == "a") {
        keysDown.A = true;
    }
    else if (e.key == "s") {
        keysDown.S = true;
    }
    else if (e.key == "d") {
        keysDown.D = true;
    }
})

window.addEventListener("keyup", e =>{
    if (e.key == "w") {
        keysDown.W = false;
    }
    else if (e.key == "a") {
        keysDown.A = false;
    }
    else if (e.key == "s") {
        keysDown.S = false;
    }
    else if (e.key == "d") {
        keysDown.D = false;
    }
    //console.log("triggerd");
})

window.addEventListener("click", e => {
    //console.log("CLICK");
    gameEngine.stateLogic(e);
})



function animate() {
    // different stages: MENU, PLAY, RESPAWN
    requestAnimationFrame(animate)
    //console.log("gameState: "+gameEngine.gameState);
    //console.log("player.alive "+player.alive)
    switch(gameEngine.gameState) {
        case "menu":
            gameEngine.resetGame();
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
    console.log("keysDown: "+"w: "+keysDown.W+" a: "+keysDown.A+" s: "+keysDown.S+" d: "+keysDown.D);
}





animate();