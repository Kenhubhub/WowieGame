window.addEventListener("keydown", e =>{
    console.log(e.key);
    player.move(e.key);
    player.update(v);
})
window.addEventListener("keyup", e =>{
    v.x = 0;
    v.y = 0;
    player.update(v);
    console.log("triggerd")
})

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    dog.update();
    
    player.draw();
    
}

animate();