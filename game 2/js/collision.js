function collision(){
    edgeCollision();
    objectCollision();
    wallCollision();
}
function edgeCollision(){
    if(player.y<=0){player.velY=0;player.y=1;}
    if(player.x<=0){player.velX=0;player.x=1;}
    if(player.y>=height-player.height){player.velY=0;player.y=height-player.height-1;}
    if(player.x>=width-player.width){player.velX=0;player.x=width-player.width-1;}
    for(let x=0;x<balls.length;x++){
        if(balls[x].y<=0){balls[x].velY*=-0.8;balls[x].y=1;}
        if(balls[x].x<=0){balls[x].velX*=-0.8;balls[x].x=1;}
        if(balls[x].y>=height-balls[x].height){balls[x].velY*=-0.8;balls[x].y=height-balls[x].height-1;}
        if(balls[x].x>=width-balls[x].width){balls[x].velX*=-0.8;balls[x].x=width-balls[x].width-1;}
    }
}
function objectCollision(){
    for(let i=0;i<balls.length;i++){
        if(player.x>balls[i].x&&player.x<balls[i].x+50&&player.y>balls[i].y&&player.y<balls[i].y+50||//zgornji levi kot
            player.x+player.width>balls[i].x&&player.x+player.width<balls[i].x+50&&player.y>balls[i].y&&player.y<balls[i].y+50||//zgornji desni kot
            player.x>balls[i].x&&player.x<balls[i].x+50&&player.y+player.height>balls[i].y&&player.y+player.height<balls[i].y+50||//spodnji levi kot
            player.x+player.width>balls[i].x&&player.x+player.width<balls[i].x+50&&player.y+player.height>balls[i].y&&player.y+player.height<balls[i].y+50){//spodnji desni kot
            if(Math.abs(player.velX)>0.1||Math.abs(player.velY)>0.1){
                balls[i].velX=player.velX*(Math.random()*0.5+1);
                balls[i].velY=player.velY*(Math.random()*0.5+1);
            }
        }
    }
}
function wallCollision(){
    for(let i=0;i<balls.length;i++){
        if(balls[i].x>width-300&&balls[i].y>height-300){
            balls[i].velY*=0.9;
            balls[i].velX*=0.9;
        }
        if(balls[i].y<height-300&&balls[i].y>height-310&&balls[i].x>width-300&&wallHit==false){
            balls[i].velY*=-1;
            wallHit=true;
        }
        if(!(balls[i].y<height-300&&balls[i].y>height-310&&balls[i].x>width-300)){
            wallHit=false;
        }
    }
}