window.addEventListener("keydown", e =>{
    console.log(e.key);
    player.move(e.key);
    player.keyUpFlag = false;
})


window.addEventListener("keyup", e =>{
    player.keyUpFlag = true;
    console.log("triggerd")
})

window.addEventListener("click", e => {
    // through the stick
    if (stick.state == "inHand") {
        stick.throw(e.clientX, e.clientY);
    }

})

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    dog.update();
    player.update();
    player.draw();
    stick.update()
;    stick.render();
    
}

animate();