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


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    dog.update();
    player.update();
    player.draw();
    
}

animate();