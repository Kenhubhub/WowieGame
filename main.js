window.addEventListener("keydown", e =>{
    console.log(e.key);
    switch(e.key){
        case "ArrowDown": 
                v.x = 0;
                v.y = 1;
                break;
        case "ArrowUp":
                v.x = 0;
                v.y = -1;    
                break;
        case "ArrowLeft":
            v.x = -1;
            v.y = 0;
            break;
        case "ArrowRight":
            v.x = 1;
            v.y = 0;    
            break;
        default:
                v.x = 0;
                v.y = 0
                break;

    }
})
window.addEventListener("keyup", e =>{
    v.x = 0;
    v.y = 0;
    console.log("triggerd")
})

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    dog.update();
    player.draw();
    
}

animate();