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
    // through the stick
    if (stick.state == "inHand") {
        stick.throw(e.clientX, e.clientY);
    }

})
populate(numberEnemies);
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    dog.update();
    player.update();
    player.draw();
    stick.update();
    stick.render();
    enemiesRender();
    enemiesUpdate();
}

animate();