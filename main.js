    ///////////////////////////////////////////
    //          EVENT LISTENERS              //
    //////////////////////////////////////////
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
    gameEngine.stateLogic(e);
})



function animate() {
    // different stages: MENU, PLAY, RESPAWN
    requestAnimationFrame(animate)
    console.log("gameState: "+gameEngine.gameState);
    console.log("player.alive "+player.alive)
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
}





animate();