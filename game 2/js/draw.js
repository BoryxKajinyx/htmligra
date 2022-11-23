function draw(){
    ctx.clearRect(0, 0, width, height);
    for(let i=0;i<balls.length;i++){
        ctx.drawImage(zoga,balls[i].x,balls[i].y);
    }

    ctx.drawImage(redpig, player.x, player.y);
}