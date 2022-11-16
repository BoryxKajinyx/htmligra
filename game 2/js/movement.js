function movement(){
    player.x += player.velX;
    player.y += player.velY;
    for(let i=0;i<balls.length;i++){
        balls[i].x+=balls[i].velX;
        balls[i].y+=balls[i].velY;
    }
}