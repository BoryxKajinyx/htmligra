function control(){
    if(keys[87]==true){//w
        player.velY-=player.speed;
    }
    if(keys[83]==true){//s
        player.velY+=player.speed;
    }
    if(keys[65]==true){//a
        player.velX-=player.speed;
    }
    if(keys[68]==true){//d
        player.velX+=player.speed;
    }
    if(keys[32]==true){//spacebar

    }
    player.velX*=0.8;
    player.velY*=0.8;
}